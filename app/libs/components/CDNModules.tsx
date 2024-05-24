import React from "react";

export function CDNModules({ req }: { req: Request; }) {
    return (
        <html>
            <head>
                <title>app</title>
            </head>
            <body>
                <div>app</div>
                <span>online</span>
                <div>
                    <button>hello</button>
                </div>
            </body>
        </html>
    );
}
