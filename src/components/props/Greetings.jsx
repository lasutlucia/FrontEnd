export default function Greetings({
    nama,
    title,
    university,
    location,
    darkMode
}) {
    return (
        <>
            <h1
                className={
                    darkMode
                        ? "profile-name dark"
                        : "profile-name"
                }
            >
                {nama}
            </h1>

            <p
                className={
                    darkMode
                        ? "profile-title dark"
                        : "profile-title"
                }
            >
                {title}
            </p>

            <p
                className={
                    darkMode
                        ? "profile-university dark"
                        : "profile-university"
                }
            >
                {university}
            </p>

            <p
                className={
                    darkMode
                        ? "profile-location dark"
                        : "profile-location"
                }
            >
                {location}
            </p>
        </>
    );
}