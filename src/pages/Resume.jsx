
export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        <a href="/path-to-your-resume.pdf" download>
          Download My Resume
        </a>
      </p>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Software Developer</strong> - Tech Company (2022 - Present)
          <p>Developed scalable web applications using React.js and Node.js.</p>
        </li>
        <li>
          <strong>Web Developer Intern</strong> - Startup Inc. (2021 - 2022)
          <p>Assisted in building user-friendly interfaces and debugging applications.</p>
        </li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Bachelor's in Computer Science</strong> - University Name (2018 - 2022)
        </li>
      </ul>
    </div>
  )
}