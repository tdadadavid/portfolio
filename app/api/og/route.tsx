import {ImageResponse} from "next/og";
import type {NextRequest} from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const title = searchParams.get("title") || "David Dada";
    const description = searchParams.get("description") || "Computer Scientist and Experienced Backend Engineer.";
    const type = searchParams.get("type") || "website";

    const fontDataRegular = await fetch(
        "https://fonts.gstatic.com/s/geist/v2/7Au-p_0Qj6XQZX5DCpYGgLs.woff2"
    ).then((res) => res.arrayBuffer());

    const fontDataBold = await fetch(
        "https://fonts.gstatic.com/s/geist/v2/7Au-p_0Qj6XQZXpOCJYGgLs.woff2"
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    backgroundColor: "#f4f4f4",
                    backgroundImage: "linear-gradient(to bottom right, #ffffff, #f0f0f0)",
                    padding: 50,
                    fontFamily: '"Geist", sans-serif',
                }}
            >
                <div
                    style={{
                        marginBottom: 40,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            backgroundColor: "#000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            marginRight: 16,
                            fontSize: 24,
                        }}
                    >
                        DD
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                        }}
                    >
                        David Dada
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: "bold",
                        color: "#000",
                        lineHeight: 1.1,
                        marginBottom: 24,
                        maxWidth: "70%",
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: 28,
                        color: "#666",
                        maxWidth: "60%",
                    }}
                >
                    {description}
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: 50,
                        left: 50,
                        fontSize: 24,
                        color: "#999",
                    }}
                >
                    {type === "article" ? "Article" : "Portfolio"}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Geist",
                    data: fontDataRegular,
                    weight: 400,
                    style: "normal",
                },
                {
                    name: "Geist",
                    data: fontDataBold,
                    weight: 700,
                    style: "normal",
                },
            ],
        }
    );
}
