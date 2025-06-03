import React from 'react'

const page = () => {
    return (
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4"><p className="tracking-light text-[32px] font-bold leading-tight min-w-72">Terms and Services</p></div>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">1. Introduction</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Welcome to AppForge. By accessing or using our services, you agree to be bound by these Terms and Services. Please read them carefully.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">2. Service Description</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    AppForge provides custom software development, web and mobile application development, and related services. We tailor our solutions to meet your specific
                    needs, as outlined in our project proposals and agreements.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">3. Payment Terms</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Payment terms will be specified in the project proposal. Generally, we require an upfront deposit, with subsequent payments due at various project milestones. Late
                    payments may incur additional fees.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">4. Intellectual Property</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Upon full payment, AppForge grants you a non-exclusive, perpetual license to use the software developed for your project. We retain all rights to the
                    underlying code and methodologies.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">5. Confidentiality</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Both parties agree to maintain the confidentiality of proprietary information exchanged during the project. This includes, but is not limited to, business plans,
                    technical specifications, and customer data.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">6. Limitation of Liability</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    AppForge is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the total
                    amount paid for the project.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">7. Termination</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Either party may terminate the agreement with written notice if the other party breaches these Terms and Services. Upon termination, all outstanding payments become
                    immediately due.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">8. Governing Law</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    These Terms and Services are governed by the laws of the jurisdiction in which AppForge operates. Any disputes will be resolved in the courts of that
                    jurisdiction.
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">9. Amendments</h3>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                    AppForge reserves the right to amend these Terms and Services at any time. We will notify you of any significant changes, and your continued use of our
                    services constitutes acceptance of the revised terms.
                </p>
            </div>
        </div>
    )
}

export default page