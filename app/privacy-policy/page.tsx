"use client"

import React from "react"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-muted py-20 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-6 shadow-xl shadow-primary/20">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-secondary mb-4">Privacy Policy</h1>
                    <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
                        We are committed to protecting your personal data and respecting your privacy.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-headings:font-outfit prose-headings:font-bold prose-headings:text-secondary prose-p:text-secondary/70 prose-li:text-secondary/70 max-w-none space-y-12">

                        {/* Introduction */}
                        <div>
                            <p>
                                AG Accounting Solutions LTD is committed to protecting your personal data and respecting your privacy. This privacy notice outlines how we collect, use, store, and protect your personal information, as well as your rights under data protection laws.
                            </p>
                        </div>

                        {/* Who will collect */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Who will collect the data?</h2>
                            <p className="mb-6">AG Accounting Solutions LTD is responsible for collecting and processing your personal data.</p>

                            <div className="bg-muted p-6 rounded-2xl border border-border">
                                <h3 className="font-bold text-secondary mb-4">Contact Information:</h3>
                                <ul className="space-y-3 list-none pl-0">
                                    <li className="flex items-start">
                                        <span className="font-semibold min-w-[140px]">Company Name:</span>
                                        AG Accounting Solutions LTD
                                    </li>
                                    <li className="flex items-start">
                                        <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                        <span>21 Bryant Avenue, Slough, Berkshire, SL2 1LF</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                        <a href="mailto:data@ag-accounting.co.uk" className="text-primary hover:underline">data@ag-accounting.co.uk</a>
                                    </li>
                                    <li className="flex items-center">
                                        <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                        <a href="tel:01753316048" className="text-primary hover:underline">01753 316 048</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* What info */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">What information do we collect?</h2>
                            <p>We collect personal data from existing and prospective clients, employees, and other individuals. This may include (but is not limited to):</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Contact details (e.g., name, address, phone number, email)</li>
                                <li>Date of birth</li>
                                <li>Marital status</li>
                                <li>National Insurance number</li>
                                <li>Tax reference numbers</li>
                                <li>Bank account details</li>
                                <li>Identification documents for anti-money laundering purposes</li>
                                <li>Financial information and payroll details</li>
                                <li>Educational background and job titles</li>
                                <li>CVs, certificates, and diplomas</li>
                                <li>Nationality</li>
                            </ul>
                        </div>

                        {/* How collect */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">How do we collect your data?</h2>
                            <p>We collect your data in various ways, including:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Direct collection:</strong> When you provide information via email, phone calls & messages, meetings, questionnaires, or online forms.</li>
                                <li><strong>From third parties:</strong> If you have given your consent to a previous accountant, employer, or another third party to share your information with us.</li>
                            </ul>
                        </div>

                        {/* Why collect */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Why do we collect your data?</h2>
                            <p>We use your personal data for various legitimate purposes, including:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Contractual obligations:</strong> To perform the services agreed upon in our contract with you.</li>
                                <li><strong>Communication:</strong> To send newsletters, updates, and other information relevant to accountancy, tax, business advisory, and corporate finance services. We will only send this information with your consent or if we have a legitimate interest.</li>
                                <li><strong>Legal obligations:</strong> To comply with legal and regulatory requirements, such as submitting information to HMRC and Companies House.</li>
                            </ul>
                        </div>

                        {/* Lawful basis */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Our lawful basis for processing your data:</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Contractual necessity:</strong> We process personal data as required to fulfil our contract with you.</li>
                                <li><strong>Legitimate interests:</strong> Where necessary, we process personal data to pursue our legitimate business interests, such as sending relevant communications (e.g., newsletters or updates).</li>
                                <li><strong>Legal obligation:</strong> We may process personal data when we are required to do so by law.</li>
                            </ul>
                        </div>

                        {/* Who share with */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Who do we share your data with?</h2>
                            <p>We may share your personal data with third parties, but only when it is necessary for the performance of our services or to comply with legal requirements. These third parties may include:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>HMRC and other government bodies (e.g., Companies House)</li>
                                <li>Employees and staff</li>
                                <li>Third-party service providers</li>
                                <li>An alternate appointed by us in the event of incapacity or death</li>
                                <li>Third parties in the event of a business sale, transfer, or merger</li>
                            </ul>
                            <p className="mt-4 italic">We require all third parties to respect the confidentiality and security of your data and to only use it for specified purposes.</p>
                        </div>

                        {/* How long keep */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">How long do we keep your data?</h2>
                            <p>
                                We will retain your personal data only for as long as necessary to fulfil the purposes for which it was collected. This includes retaining your data for legal, accounting, and reporting requirements. Once no longer needed, your data will be securely deleted or destroyed after six months from the date of disengagement.
                            </p>
                        </div>

                        {/* Your rights */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Your data rights:</h2>
                            <p>You have the following rights in relation to your personal data:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
                                <li><strong>Rectification:</strong> You can ask us to correct any inaccurate or incomplete data.</li>
                                <li><strong>Erasure:</strong> You can request that we delete your personal data, subject to legal obligations.</li>
                                <li><strong>Objection:</strong> You can object to the processing of your data, where we rely on legitimate interests.</li>
                                <li><strong>Data portability:</strong> You can request to receive your data in a structured, commonly used format.</li>
                                <li><strong>Withdraw consent:</strong> If we rely on consent for processing, you have the right to withdraw this consent at any time.</li>
                            </ul>
                        </div>

                        {/* How to complain */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">How to complain:</h2>
                            <p>
                                If you have any concerns about how we handle your data, you can contact us at <a href="mailto:data@ag-accounting.co.uk" className="text-primary hover:underline font-bold">data@ag-accounting.co.uk</a>.
                            </p>
                            <p className="mt-2">
                                You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO), the UK’s data protection regulator.
                            </p>
                        </div>

                        {/* Data Security */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-4">Data Security:</h2>
                            <p>
                                We have implemented appropriate technical and organizational measures to protect your data from unauthorized access, accidental loss, or misuse. Access to your data is limited to authorized personnel only, and they are bound by confidentiality agreements.
                            </p>
                        </div>

                        {/* Changes */}
                        <div className="border-t border-border pt-8 mt-12">
                            <h2 className="text-xl font-bold text-secondary mb-4">Changes to this Privacy Notice:</h2>
                            <p className="text-sm text-secondary/60">
                                We may update this privacy notice from time to time. Please check this page periodically to stay informed of any changes.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
