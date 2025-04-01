import {ImageResponse} from "next/og";
import {NextRequest} from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const title = searchParams.get("title") || "David Dada";
    const description = searchParams.get("description") || "Computer Scientist and Experienced Backend Engineer.";
    const type = searchParams.get("type") || "website";

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
                    backgroundColor: "#1e3a8a",
                    backgroundImage: "linear-gradient(to bottom right, #1e40af, #3b82f6)",
                    padding: 50,
                    fontFamily: "Arial, sans-serif",
                    color: "#fff",
                }}
            >
                {/*<div style={{marginBottom: 40, display: "flex", alignItems: "center"}}>*/}
                {/*    <div*/}
                {/*        style={{*/}
                {/*            width: 64,*/}
                {/*            height: 64,*/}
                {/*            borderRadius: "50%",*/}
                {/*            backgroundColor: "#000",*/}
                {/*            display: "flex",*/}
                {/*            alignItems: "center",*/}
                {/*            justifyContent: "center",*/}
                {/*            color: "#fff",*/}
                {/*            marginRight: 16,*/}
                {/*            fontSize: 24,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        DD*/}
                {/*    </div>*/}
                {/*    <div style={{fontSize: 24, fontWeight: "bold"}}>David Dada</div>*/}
                {/*</div>*/}
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: "bold",
                        color: "#fff",
                        lineHeight: 1.1,
                        marginBottom: 24,
                        maxWidth: "70%",
                    }}
                >
                    {title}
                </div>
                <div style={{fontSize: 28, color: "#d1d5db", maxWidth: "60%"}}>{description}</div>
                <div style={{position: "absolute", bottom: 50, left: 50, fontSize: 24, color: "#94a3b8"}}>
                    {type === "article" ? "Article" : "Portfolio"}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
