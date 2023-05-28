const development = {
   name: 'development',
   asset_path: '/assets',
   session_cookie_key: 'blahsomething',
   db: 'codeial_development',
   smtp:{
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
         user: 'codialdevprod@gmail.com',
         pass: 'ccjjuaxbpdsfupmj'
      }
   },
   google_client_id: "886467910780-va0gu6j2u2hp6uggn1gu24to5cdrm34i.apps.googleusercontent.com",
   google_client_secret: "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",
   google_call_back_url: "http://localhost:8000/users/auth/google/callback",
   jwt_secret:"codeial"
}

const production = {
   name: 'production'
}

module.exports = development;