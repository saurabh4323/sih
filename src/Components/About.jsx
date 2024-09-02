import React from "react";

const styles = {
  body: {
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: "17px",
    backgroundColor: "#dee4f8",
    margin: 0,
    padding: 0,
  },
  item: {
    maxWidth: "920px",
    background: "rgb(237, 237, 237)",
    borderRadius: "20px",
    boxShadow: "0 0 20px 10px rgba(0, 0, 0, .4)",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    zIndex: 1000,
    margin: "70px auto",
    padding: "39px 0 0",
  },
  abo: {
    padding: "40px",
    marginLeft: "450px",
    width: "360px",
    height: "400px",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
  },
  con: {
    color: "#2c1256",
    marginTop: "-30px",
    marginLeft: "-850px",
    fontWeight: "bolder",
    fontSize: "80px",
    padding: "10px",
  },
  con1: {
    textAlign: "justify",
    color: "#291f92",
    lineHeight: "2.5",
    marginLeft: "20px",
    marginTop: "-240px",
    marginBottom: "50px",
  },
  tea: {
    marginTop: "80px",
    marginLeft: "500px",
    fontSize: "40px",
  },
  teamContainer: {
    padding: "100px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "80%",
  },
  teamMember: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    width: "28%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    marginBottom: "20px",
    transition: "background-color 0.3s, transform 0.3s",
  },
  teamMemberHover: {
    transform: "translateY(-10px)",
    backgroundColor: "#aaabf9",
  },
  teamMemberImg: {
    borderRadius: "15px",
    width: "100%",
    height: "auto",
    marginBottom: "15px",
  },
  teamMemberH3: {
    margin: "10px 0",
    fontSize: "1.2em",
    color: "#333",
  },
  teamMemberRole: {
    fontStyle: "bold",
    color: "#1a1b1c",
    marginBottom: "10px",
  },
  teamMemberDescription: {
    fontSize: "0.9em",
    color: "#171515",
    marginBottom: "15px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  socialIcon: {
    color: "#333",
    margin: "0 10px",
    fontSize: "1.2em",
    textDecoration: "none",
  },
};

const AboutUs = () => {
  return (
    <div style={styles.body}>
      <div style={styles.item}>
        <img src="about.gif" alt="About Us" style={styles.abo} />
        <p style={styles.con}>
          About <br /> Us
        </p>
        <p style={styles.con1}>
          Welcome to Constitution Made Simple, your go-to platform
          <br /> for understanding the Indian Constitution in clear and simple
          <br /> language. We believe that every citizen should have easy
          <br /> access to the principles and laws that govern our country, and
          <br /> our mission is to make the Indian Constitution accessible and
          <br /> understandable for everyone.
        </p>
      </div>

      <p style={styles.tea}>Team Members</p>

      <section>
        <div style={styles.teamContainer}>
          {[
            {
              img: "priyansh.jpg",
              name: "Priyansh Agrawal",
              role: "Project Coordinator",
              description:
                "A tech-savvy strategist with a knack for innovation.",
            },
            {
              img: "saurabh.jpeg.jpg",
              name: "Saurabh Singh",
              role: "Technical leader",
              description: "A visionary leader driving our team's success.",
            },
            {
              img: "anish.jpg",
              name: "Anish Sharma",
              role: "Game Creator",
              description:
                "A creative thinker with a passion for problem-solving.",
            },
            {
              img: "aparna.jpg",
              name: "Aparna Goli",
              role: "Creative writer",
              description: "A guru with a talent for communication.",
            },
            {
              img: "khushi.jpg",
              name: "Khushi Mor",
              role: "Design Lead",
              description: "An oriented designer with an eye for aesthetics.",
            },
            {
              img: "hrishita.jpg",
              name: "Hrishita Saha",
              role: "Research Analyst",
              description:
                "A data analyst who turns numbers into actionable insights.",
            },
          ].map((member, index) => (
            <div
              key={index}
              style={{
                ...styles.teamMember,
                ...(index % 2 === 0 ? styles.teamMemberHover : {}),
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={styles.teamMemberImg}
              />
              <h3 style={styles.teamMemberH3}>{member.name}</h3>
              <p style={styles.teamMemberRole}>{member.role}</p>
              <p style={styles.teamMemberDescription}>{member.description}</p>
              <div style={styles.socialIcons}>
                <a href="#" style={styles.socialIcon}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" style={styles.socialIcon}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={styles.socialIcon}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={styles.socialIcon}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
