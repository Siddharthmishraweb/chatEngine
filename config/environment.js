// to run in prod env => npm run prod_start 
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

// FOR production we will set our env variables in our system
// Steps to do that
// step 1: ~/.bash_profile (run this command on ubuntu terminal)
// if Permission denied this error came in 1st step 
// see the permissions of this file "ls -l ~/.bash_profile"
// and run this command to give permission "chmod u+x ~/.bash_profile"
// step 2: vi ~/.bash_profile
// step 3: now after the step 2 a file open press 'i' to set in insert mode then add path like "export CODIAL_ASSET_PATH="/assets"
// then for saving do ctrl + c then type :wq
// Step 4: Refresh the file by "source ~/.bash_profile" running this command
// step 5: see your variable is saved or not , run "node"
// step 6: run "process.env" and then check whether your variable is visible or not
// step 7: If it is visible then run the command and see the value "process.env.CODIAL_ASSET_PATH"


const production = {
   name: 'production',
   asset_path: process.env.CODIAL_ASSET_PATH,
   session_cookie_key: process.env.CODIAL_SESSION_COOKIE_KEY,
   db: 'codeial_production',
   smtp:{
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
         user: process.env.CODIAL_SMTP_AUTH_USER,
         pass: process.env.CODIAL_SMTP_AUTH_PASS
      }
   },
   google_client_id: process.env.CODIAL_GOOGLE_CLIENT_ID,
   google_client_secret: process.env.CODIAL_GOOGLE_CLIENT_SECRET,
   google_call_back_url: process.env.CODIAL_GOOGLE_CALL_BACK_URL,
   jwt_secret:process.env.CODIAL_JWT_SECRET
}

module.exports = eval(process.env.CODIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODIAL_ENVIRONMENT);