
export default function Theme() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "5rem", marginRight: '80rem',width:"95%" }}>
                <h1 style={{ color: "#0ac182", fontSize: "4rem", marginTop: "1rem", marginRight: "2rem" }}>Theme</h1>

                <button
                    style={{
                        backgroundColor: "#ffffff", color: "black", padding: "1rem", borderRadius: "5rem", width: "10rem",justifySelf:"flex-end"
                    }}
                >
                    VIEW VIDEO
                </button>
            </div>

            <p style={{ color: "white", fontSize: "1rem", marginTop: "1.5rem", marginBottom: "5rem", marginRight: "4rem" }}>
                Ventura Incertus: Latin translation for "The Journey is Uncertain", focuses on a profound reflection of the dynamic and unpredictable <br /> nature of entrepreneurial endeavours. In this edition of Summit, we resonate deeply with the foundational essence of innovation,<br /> beginning with the fiery passion to create and dismantle the barriers that stand in the way of progress.
            </p>
        </div>
    );
}
