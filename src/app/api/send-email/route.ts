import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Fonction pour vérifier le token Turnstile
async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || '',
        response: token,
      }),
    })

    const result = await response.json()
    return result.success
  } catch (error) {
    console.error('Erreur vérification Turnstile:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, turnstileToken, ...formData } = body

    // Vérification du token Turnstile
    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, message: 'Veuillez compléter la vérification anti-robot' },
        { status: 400 }
      )
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken)
    if (!isValidToken) {
      return NextResponse.json(
        { success: false, message: 'Échec de la vérification anti-robot. Veuillez réessayer.' },
        { status: 400 }
      )
    }

    let subject = ''
    let htmlContent = ''

    if (type === 'contact') {
      subject = `Nouveau contact - ${formData.subject}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Nouveau message de contact - FK EXPRESS</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations du contact :</h3>
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone || 'Non renseigné'}</p>
            <p><strong>Entreprise :</strong> ${formData.company || 'Non renseigné'}</p>
            <p><strong>Sujet :</strong> ${formData.subject}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message :</h3>
            <p style="line-height: 1.6;">${formData.message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f9fafb;">
            <p style="color: #6b7280; font-size: 12px;">
              Ce message a été envoyé depuis le formulaire de contact du site FK EXPRESS
            </p>
          </div>
        </div>
      `
    } else if (type === 'devis') {
      subject = `Nouvelle demande de devis - ${formData.service_name}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Nouvelle demande de devis - FK EXPRESS</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations du client :</h3>
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone}</p>
            <p><strong>Entreprise :</strong> ${formData.company || 'Non renseigné'}</p>
          </div>

          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Service demandé :</h3>
            <p><strong>Service :</strong> ${formData.service_name}</p>
            <p><strong>Adresse de départ :</strong> ${formData.pickup_address}</p>
            <p><strong>Adresse de livraison :</strong> ${formData.delivery_address}</p>
            <p><strong>Date souhaitée :</strong> ${formData.pickup_date}</p>
            ${formData.urgent === 'Oui' ? '<p><strong style="color: #dc2626;">⚠️ URGENT</strong></p>' : ''}
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Description :</h3>
            <p style="line-height: 1.6;">${formData.description}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f9fafb;">
            <p style="color: #6b7280; font-size: 12px;">
              Cette demande a été envoyée depuis le formulaire de devis du site FK EXPRESS
            </p>
          </div>
        </div>
      `
    }

    // Test mode si pas de credentials
    const isTestMode = !process.env.EMAIL_USER || process.env.EMAIL_USER === 'votre-email@gmail.com'
    
    if (isTestMode) {
      console.log('Mode test - Email content would be:')
      console.log('Subject:', subject)
      console.log('HTML Content:', htmlContent.substring(0, 200) + '...')
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email simulé avec succès (mode test)',
          testMode: true 
        },
        { status: 200 }
      )
    }

    // Configuration du transporteur SMTP pour OVH
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net', // Serveur SMTP OVH
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER || 'votre-email@gmail.com',
      to: 'contact@fkexpress.pro',
      subject: subject,
      html: htmlContent
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}