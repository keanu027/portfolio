import React from "react"

import StyleCss from "./contact.module.scss"

const ContactPage = () => (

    <div className={StyleCss.container} id="contact">
      <p className={StyleCss.title}>GET IN TOUCH</p>
      <div className={StyleCss.bar}></div>
      {/* <p>
        If you wanna get in touch, talk to me about a project collaboration,
        request, question or just say hi just fill up the awesome form or you
        can direct message me at <a href="www.gmail.com" target="_blank" style={{color:"#f76449",fontWeight:550}}>manlykeanu@gmail.com</a>.
      </p> */}
      <p className={StyleCss.paragraph}>
        If you wanna get in touch, talk to me about a project collaboration,
        request, question or just say hi just direct message {" "}
        <a
          href={`https://mail.google.com`}
          target="_blank"
          className={StyleCss.paragraphlink}
        >
          manlykeanu@gmail.com
        </a>
        .
      </p>
    </div>
)

export default ContactPage
