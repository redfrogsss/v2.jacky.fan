import Script from 'next/script'

export default function GoogleAnalytics() {
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}></Script>
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', '${process.env.GA_ID}');
        `}

            </Script>
        </>
    );
}