import React from 'react'

const page = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5 max-md:px-0">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">About Appforge</p>
        </div>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          At Appforge, we're more than just a web and mobile application agency; we're a team of passionate innovators dedicated to transforming ideas into
          impactful digital solutions. Our journey began with a shared vision: to bridge the gap between technology and creativity, delivering bespoke applications that
          resonate with users and drive business growth.
        </p>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Our mission is to empower businesses with cutting-edge technology, crafting digital experiences that are not only functional but also intuitive and engaging. We
          strive to understand our clients' unique challenges and goals, tailoring our approach to ensure every project aligns perfectly with their vision.
        </p>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Values</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
            <div className="text-[#111418]" data-icon="Users" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111418] text-base font-bold leading-tight">User-Centric Design</h2>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
            <div className="text-[#111418]" data-icon="Code" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111418] text-base font-bold leading-tight">Technical Excellence</h2>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
            <div className="text-[#111418]" data-icon="Clock" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111418] text-base font-bold leading-tight">Timely Delivery</h2>
          </div>
        </div>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          We believe in putting the user first, ensuring every application we build is intuitive and meets their needs. Our commitment to technical excellence means we leverage
          the latest technologies and best practices to deliver robust, scalable solutions. And we understand the importance of deadlines, striving to deliver projects on time
          and within budget.
        </p>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet the Team</h2>
        <div className="overflow-x-auto">
          <div className="flex flex-wrap p-4 gap-8 min-w-full">
            {[
              {
                name: "Mohd Shahnawaz Sheikh",
                title: "Co-Founder & Head of Mobile Development",
                image:
                  "https://media.licdn.com/dms/image/v2/D4D03AQHAl9BN246h_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691645893575?e=1754524800&v=beta&t=yHYreeawbvrLw1O4K5yhZQ7WQI2mB6NG8_sQgVoMf3M"
              },
              {
                name: "Mohd Runna Sheikh",
                title: "Co-Founder & Head of Web Development",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQEqQRJalRv7cw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719023122742?e=1754524800&v=beta&t=lkmC2opUDm-GtQjDHvZqqEGBtHjHAa2JRmJTn0CDcGo"
              },
              {
                name: "Mirza Shah Hussain",
                title: "Co-Founder & Head of Web Development",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQGRgxWrcdD8Ng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714830037016?e=1754524800&v=beta&t=OTe-EdqRSoCW--Y9gl-V_Tt2Ot4XGbXmZyw8LpEAU3E"
              }
            ].map((person, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center min-w-[180px] max-w-xs flex-shrink-0 md:flex-1"
              >
                <div
                  className="aspect-square w-32 md:w-40 rounded-full bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url("${person.image}")` }}
                />
                <p className="text-[#111418] text-base font-medium">{person.name}</p>
                <p className="text-[#617389] text-sm">{person.title}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Our team comprises seasoned professionals with diverse backgrounds in design, development, and project management. Each member brings a unique perspective and
          expertise, ensuring a holistic approach to every project. We foster a collaborative environment where creativity thrives and innovation is encouraged.
        </p>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Approach</h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          We follow a structured yet flexible approach to project development, starting with a deep dive into your business needs and target audience. From concept to
          deployment, we maintain open communication, ensuring transparency and alignment at every stage. Our agile methodology allows us to adapt to evolving requirements,
          delivering a final product that exceeds expectations.
        </p>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Client Collaboration</h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Collaboration is at the heart of our process. We view our clients as partners, working closely with them to bring their vision to life. Regular updates, feedback
          sessions, and a dedicated point of contact ensure a seamless and productive partnership. Your success is our success, and we're committed to achieving it together.
        </p>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Journey</h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#111418]" data-icon="Briefcase" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                ></path>
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-base font-medium leading-normal">Founded Appforge</p>
            <p className="text-[#617389] text-base font-normal leading-normal">2025</p>
          </div>


        </div>
        <p className="text-base font-normal leading-normal pb-3 pt-1 px-4 my-4">
          Founded in 2025, we're a newly launched software agency with bold ambitions and a clear mission — to deliver exceptional digital solutions that solve real-world problems. While we're just getting started, our foundation is built on strong expertise, creativity, and a commitment to client success. We're excited to kick off this journey, build lasting partnerships, and bring innovative ideas to life, one project at a time.
        </p>
      </div>
    </div>
  )
}

export default page