MASUD RANA — PORTFOLIO (Netlify deploy guide)
=============================================

FILES (plain HTML + CSS + JavaScript, no build step, no framework)
  index.html         Page structure and all text: Home, Resume, Works, Contact
                     (pages switch by #home, #resume, #works, #contact).
  css/style.css      All design: colours, fonts, texture, card, ledger, skills,
                     marquee, footer, animations, mobile layout.
  js/main.js         Page switching, preloader, cursor dot, 3D card tilt and
                     glow, blur fade-up on scroll, contact form.
  images/portrait.jpg  Your photo used on the Home page.
  favicon.ico, favicon.svg, favicon-32x32.png, apple-touch-icon.png,
  icon-192.png, icon-512.png, site.webmanifest
                     The browser-tab icon (MR monogram). Keep these in the same
                     folder as index.html.
  Fonts: Cormorant Garamond, Cinzel, IBM Plex Mono (loaded from Google Fonts).

HOW TO PUBLISH ON NETLIFY
  1. Unzip this file so you have the folder "masud-portfolio".
  2. Log in at https://app.netlify.com/
  3. Choose: Add new site -> Deploy manually (drag and drop).
  4. Drag the whole "masud-portfolio" folder onto the upload area.
  5. Wait a few seconds. Netlify gives you a live link (xxxx.netlify.app).
  6. Optional: Site configuration -> Change site name, to get
     something like masud-rana.netlify.app.

CONTACT FORM -> YOUR EMAIL (do this once, after the first deploy)
  The form is already set up for Netlify Forms (name: "contact").
  1. In Netlify open your site -> Forms.
  2. If "contact" is not listed yet, submit the form once on the live site.
  3. Forms -> Form notifications (Settings and usage) -> Add notification
     -> Email notification.
  4. Enter masud905868@gmail.com and save.
  5. Send a test message from the live site and check your inbox
     (also look in Spam the first time).
  Netlify limits free form submissions per month; check Netlify's current
  pricing page for the exact limit.

IF YOU UPDATE THE SITE LATER
  Replace index.html and deploy again (Deploys -> drag the folder again).

NOTE
  If the form cannot reach Netlify, the site falls back to opening the
  visitor's email app with the message ready for masud905868@gmail.com.
