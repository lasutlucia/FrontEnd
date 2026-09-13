export default function Footer({ darkMode }) {
    return (
        <footer
            className={
                darkMode
                    ? "footer dark"
                    : "footer"
            }
        >

            <p>© 2026 Lucia Lasut</p>

            <p>
                Mahasiswa Informatika • Universitas Klabat
            </p>

        </footer>
    );
}