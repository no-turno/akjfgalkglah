"use server";

export default function Template({
    children,
    _template,
}: {
    children: React.ReactNode;
    _template?: boolean;
}) {
    if (_template) return <>{children}</>;

    return (
        <html>
            <head>
                <title>app</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
