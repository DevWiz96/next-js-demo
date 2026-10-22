"use client"
export default function AboutPage() {
  
  const getRequest = async ()=>{
    fetch('api/contact',{
      method:'GET',
      headers:{
        'Content-Type':'application/jsson'
      },
    }).then(res=>res.json()).then(data=> console.log(data))
  }
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          About Us
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Cloud Engineering Bootcamp
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to the Cloud Engineering Bootcamp by Zaio!
          This platform is part of our learning journey,
          designed to help aspiring cloud engineers develop
          practical skills through hands-on experience.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            What is this bootcamp about?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Our bootcamp focuses on understanding how modern
            applications are built, deployed, and managed in
            the cloud. We start with the fundamentals of web
            applications and gradually move into cloud
            infrastructure, automation, and DevOps practices.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            What will you learn?
          </h2>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>• Web application fundamentals</li>
            <li>• Git and version control</li>
            <li>• Linux and server management</li>
            <li>• Cloud computing with AWS</li>
            <li>• Docker and containerization</li>
            <li>• CI/CD and deployment automation</li>
            <li>• Infrastructure as Code</li>
          </ul>
        </section>
        <section className="mt-10">
         <h2 className="text-2xl font-semibold">
            Test api requests
          </h2>
          <h3>Get request: <button onClick={getRequest} className="bg-blue-400 p-3 rounded-xl" > Request</button></h3>
        </section>

        <section className="mt-10 rounded-xl bg-gray-50 p-6">
          <h2 className="text-xl font-semibold">
            About Zaio
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Zaio is a technology education platform focused
            on helping students build practical, job-ready
            skills. Through structured learning and real-world
            projects, Zaio helps learners prepare for careers
            in technology.
          </p>

          <a
            href="https://www.zaio.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-medium text-blue-600 hover:underline"
          >
            Visit Zaio Website &rarr;
          </a>
        </section>

        <footer className="mt-16 border-t pt-6 text-sm text-gray-500">
          Built for learning as part of the Zaio Cloud
          Engineering Bootcamp.
        </footer>
      </div>
    </main>
  );
}
