import Greetings from "./props/Greetings";

export default function Hero({ profileData, darkMode }) {
    return (
        <section
            id="home"
            className={
                darkMode
                    ? "profile-section dark"
                    : "profile-section"
            }
        >

            {/* Background Decorations */}
            <div className="background-decoration">
                <div className="bubble bubble-one"></div>
                <div className="bubble bubble-two"></div>
                <div className="bubble bubble-three"></div>
            </div>

            {/* Profile Card */}
            <div
                className={
                    darkMode
                        ? "profile-card dark"
                        : "profile-card"
                }
            >

                {/* Avatar */}
                <div className="profile-avatar">
                    <div
                        className={
                            darkMode
                                ? "avatar-circle dark"
                                : "avatar-circle"
                        }
                    >
                        <span>LL</span>
                    </div>

                    <div className="avatar-dot"></div>
                </div>

                {/* Profile Content */}
                <div className="profile-content">

                    <p className="profile-label">
                        Personal Profile
                    </p>

                    <Greetings
                        nama={profileData.fullName}
                        title={profileData.title}
                        university={profileData.university}
                        location={profileData.location}
                        darkMode={darkMode}
                    />

                </div>

                {/* Accent */}
                <div className="profile-accent"></div>

            </div>
        </section>
    );
}