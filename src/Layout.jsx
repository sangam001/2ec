import React from 'react';

function Layout({children, title="React JS App"}) {
    return (
        <div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2778776665431199"
     crossorigin="anonymous"></script>
            <Script strategy={"afterInteractive"} src={`https://www.googletagmanager.com/gtag/js?id=G-MQMPTMDET6`}/>
<Script id={"google-analytics"} strategy={"afterInteractive"} dangerouslySetInnerHTML={{
    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-MQMPTMDET6');
        `
}}/>
            <Head>
                <link rel="shortcut icon" href={"/static/favicon.svg"}/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Author Name"/>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    );
}

export default Layout;