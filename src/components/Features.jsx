import Featurelist from "./props/Featurelist";

export default function Features({ profileData, darkMode }) {

    const academicFeatures = [
        {
            label: "Universitas",
            value: profileData.university
        },
        {
            label: "Program Studi",
            value: profileData.program
        },
        {
            label: "Semester",
            value: profileData.semester
        },
        {
            label: "Tingkat",
            value: profileData.level
        }
    ];

    return (
        <section
            className={
                darkMode
                    ? "information-section dark"
                    : "information-section"
            }
        >

            <div
                id="about"
                className={
                    darkMode
                        ? "information-card dark"
                        : "information-card"
                }
            >

                {/* Tentang Saya */}
                <div className="about-section">

                    <h2 className="section-title">
                        Tentang Saya
                    </h2>

                    <p
                        className={
                            darkMode
                                ? "about-text dark"
                                : "about-text"
                        }
                    >
                        {profileData.about}
                    </p>

                </div>

                {/* Informasi Akademik */}
                <div id="academic" className="academic-section">

                    <h2 className="section-title">
                        Informasi Akademik
                    </h2>

                    <div className="academic-grid">

                        {academicFeatures.map((feature, index) => (
                            <Featurelist
                                key={index}
                                label={feature.label}
                                value={feature.value}
                                darkMode={darkMode}
                            />
                        ))}

                    </div>

                </div>

                <div className="profile-accent bottom"></div>

            </div>

        </section>
    );
}