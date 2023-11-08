import React, { useState, useEffect } from 'react'
import divisha from '../public/assets/logo/divisha.png'
import {
    Box,
    //Heading,
    Text,
    Flex
} from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import NavBar from './navbar/navbar';
function PrivacyPolicy() {
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);
    return (
    <>
      <NavBar/>
        <div className='container'>
            <Box mb={4} width={windowWidth > 600 ? '75%' : '90%'}>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    width='100%'
                    my={4}
                >
                    <Box>
                        <Text className='top-heading' fontSize={{ xxxs: 20, xxs: 34 }} > Privacy Policy </Text>
                        <Text className='top-sub-heading' fontSize={{ xxxs: 14, xxs: 20 }}>Last updated on November 03, 2022 </Text>
                    </Box>
                    <Image src={divisha} alt="logo" height={40} width={40} />
                </Flex>

                <Text py={3} className='des' px={2}
                    fontSize={windowWidth > 600 ? 20 : 16}
                >
                    This privacy policy for Divisha Innovations Private Limited (<b>"Company," "we," "us," </b> or <b>  "our"</b>),
                    describes how and why we might collect, store, use,
                    and/or share ("process") your information when you use our services<b>("Services"),</b>such as when you:

                    <Text ml={3}>
                        ▪ Download and use our application(s), such as our mobile application — Vidhi Business Owner and Vidhi Staff, or any other application of ours that links to this privacy policy.
                    </Text>
                    <Text ml={3}>
                        ▪ Engage with us in other related ways ― including any sales, marketing, or promotional events.

                    </Text>
                    <b>Questions or concerns? </b>  Reading this privacy policy will help you understand
                    your privacy rights and choices. If you do not agree with our policies and practices,
                     please contact us at  <span className='blue-txt'>contact@divisha.io. </span> with your
                     questions or concerns related highlighting services required.

                </Text>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}> SUMMARY OF KEY POINTS</Text>
                    <Text
                        className='des'
                        fontSize={windowWidth > 600 ? 20 : 16}
                    >
                        <Text pb={3}>
                            <b>
                                This summary provides key points from our privacy policy, but you can find out more details
                                about any of these topics by using our table of contents below to find the section you are looking for.
                            </b>
                        </Text>
                        <Text pb={3}>
                            <b>What personal information do we process? </b> When you install, register and or use our mobile applications services, we may process personal information related to business, business owner and business staff.
                        </Text>
                        <Text pb={3}>
                            <b> Do we process any sensitive personal information?</b>  We may process sensitive personal information,
                            when necessary, with your consent or as otherwise permitted by applicable law.
                        </Text>
                        <Text pb={3}>
                            <b>Do you receive any information from third parties? </b>  We do not receive any information from third parties.
                        </Text>
                        <Text pb={3}>
                            <b>  How do you process my information?</b> We process your information to provide, improve,
                            and administer our Services, communicate with you, for security and fraud prevention,
                            and to comply with law. We may also process your information for other purposes with your consent.
                            We process your information only when we have a valid legal reason to do so.
                        </Text>
                        <Text pb={3}>
                            <b> In what situations and with which types of parties do we share personal information?</b>  We may share information in
                            specific situations and with specific categories of third parties.
                        </Text>
                        <Text pb={3}>
                            <b> How do we keep your information safe?</b>  We have organizational and technical processes and
                            procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our
                            security and improperly collect, access, steal, or modify your information.
                        </Text>
                        <Text pb={3}>
                            <b>What are your rights? </b>  Depending on where you are located geographically, the applicable privacy
                            law may mean you have certain rights regarding your personal information.
                        </Text>
                        <Text pb={3}>
                            <b> How do I exercise my rights? </b> The easiest way to exercise your rights is by filling out our data subject request form or by contacting us.
                            We will consider and act upon any request in accordance with applicable data protection laws.
                        </Text>
                        <Text pb={3}>
                            Want to learn more about what the company does with any information we collect? Please refer to the sections below.
                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}> TABLE OF CONTENTS</Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>
                        1. WHAT INFORMATION DO WE COLLECT? <br />
                        2. HOW DO WE PROCESS YOUR INFORMATION?  <br />
                        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?  <br />
                        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?  <br />
                        5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?  <br />
                        6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?  <br />
                        7. HOW LONG DO WE KEEP YOUR INFORMATION?  <br />
                        8. HOW DO WE KEEP YOUR INFORMATION SAFE?  <br />
                        9. DO WE COLLECT INFORMATION FROM MINORS?  <br />
                        10. WHAT ARE YOUR PRIVACY RIGHTS?  <br />
                        11. CONTROLS FOR DO-NOT-TRACK FEATURES  <br />
                        12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?  <br />
                        13. DO WE MAKE UPDATES TO THIS POLICY?  <br />
                        14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?  <br />
                        15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}> 1. WHAT INFORMATION DO WE COLLECT?</Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>
                        <b> Personal information you disclose to us</b>
                        <Text pb={3}> <b>In Short: </b>  We collect personal information that you provide to us.</Text>
                        <Text pb={3}>
                        We collect personal information that you voluntarily provide to us when you register for the Vidhi app services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the app services, or otherwise when you contact us.

                        </Text>
                        <Text pb={3}> <b>Personal Information Provided by You. </b>  The personal information that
                            we collect depends on the context of your interactions with us and the Services, the choices you make,
                            and the products and features you use. The personal information we collect may include the following:
                        </Text>
                        <Text pb={3}> ▪ names <br />
                            ▪ phone numbers <br />
                            ▪ email addresses <br />
                            ▪ usernames <br />
                            ▪ passwords <br />
                            ▪ contact preferences <br />
                            ▪ contact or authentication data <br />
                            ▪ billing addresses <br />
                        </Text>
                        <Text pb={3}>
                            <b> Sensitive Information. </b> When necessary, with your consent or as otherwise
                            permitted by applicable law, we process the following categories of sensitive information:
                        </Text>
                        <Text pb={3}> ▪ Business name <br />
                            ▪ PAN (optional) <br />
                            ▪ GSTN (optional)  <br />
                            ▪ Bookkeeping data entered in app  <br />
                            ▪ Business Processes Information  <br />
                        </Text>
                        <Text pb={3}> Application Data. If you use our application(s),
                            we also may collect the following information if you choose to provide us with access or permission:
                        </Text>
                        <Text pb={3}>
                            <li>  Geolocation Information. We may request access or permission to track location- based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services such as adding business address, marking attendance and employee productivity assessment. If you wish to change our access or permissions, you may do so in your device's settings.

                            </li>
                            <li>  Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device’s camera, contacts, microphone, messages, storage. If you wish to change our access or permissions, you may do so in your device’s settings.

                            </li>
                            <li>
                                Push Notifications. We may request to send you push notifications regarding your business account or certain features of the Vidhi Business Owner and Vidhi Staff application(s).
                                If you wish to opt out from receiving these types of communications,
                                you may turn them off in your device's settings.
                            </li>
                        </Text>

                        <Text pb={3}>
                            This information is primarily needed to maintain the security and operation of our application(s),
                            for troubleshooting, and for our internal analytics and reporting purposes.
                        </Text>
                        <Text pb={3}>
                            All personal information that you provide to us must be true,
                            complete, and accurate, and you must notify us of any changes to such personal information.
                        </Text>
                        <b>
                            Information automatically collected
                        </b>
                        <Text pb={3}>
                            <b> In Short: </b> Some information — such as your Internet Protocol (IP) address and/or browser
                            and device characteristics — is collected automatically when you visit our Services.
                        </Text>
                        <Text pb={3}>
                            We automatically collect certain information when you visit, use,
                            or navigate the Services. This information does not reveal your specific
                            identity (like your name or contact information) but may include device and usage information,
                            such as your IP address, browser and device characteristics, operating system, language preferences,
                            referring URLs, device name, country, location, information about how and when you use our Services,
                            and other technical information. This information is primarily needed to maintain
                            the security and operation of our Services, and for our internal analytics and reporting purposes.
                        </Text>
                        <Text pb={3}>
                            Like many businesses, we also collect information through cookies and similar technologies.
                        </Text>
                        <Text pb={3}>
                            The information we collect includes:
                        </Text>
                        <Text pb={3}>
                            <li>
                                Log and Usage Data. Log and usage data is service-related, diagnostic, usage,
                                and performance information our servers automatically collect when you access
                                or use our Services and which we record in log files. Depending on how you interact with us,
                                this log data may include your IP address, device information, browser type, and settings
                                and information about your activity in the Services (such as the date/time stamps associated
                                with your usage, pages and files viewed, searches, and other actions you take such as which features
                                you use), device event information (such as system activity,
                                error reports (sometimes called "crash dumps"), and hardware settings).
                            </li>
                            <li>
                                Device Data. We collect device data such as information about your phone,
                                tablet, or other device you use to access the Services. Depending on the device used,
                                this device data may include information such as your IP address (or proxy server),
                                device and application identification numbers, location, browser type, hardware model,
                                Internet service provider and/or mobile carrier, operating system, and system configuration information.
                            </li>
                            <li>
                                Location Data. We collect location data such as information about your device's location,
                                which can be either precise or imprecise. How much information we collect depends on the
                                type and settings of the device you use to access the Services. For example, we may use
                                GPS and other technologies to collect geolocation data that tells us your current location
                                (based on your IP address). You can opt out of allowing us to collect this information either
                                by refusing access to the information or by disabling your Location setting on your device. However,
                                if you choose to opt out, you may not be able to use certain aspects of the Services.
                            </li>


                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        2. HOW DO WE PROCESS YOUR INFORMATION?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <Text pb={3}>
                            <b>  In Short: </b>We process your information to provide, improve, and administer our Services,
                            communicate with you, for security and fraud prevention,
                            and to comply with law. We may also process your information for other purposes with your consent.
                        </Text>
                        <Text pb={3}>
                            <b>We process your personal information for a variety of reasons,
                                depending on how you interact with our Services, including: </b>
                        </Text>
                        <Text pb={3}>
                            <li>
                                <b>To facilitate account creation and authentication and otherwise manage user accounts. </b>
                                We may process your information
                                so you can create and log in to your account, as well as keep your account in working order.
                            </li>
                            <li>
                                <b>To deliver and facilitate delivery of services to the user. </b>
                                We may process your information to provide you with the requested service.
                            </li>
                            <li>
                                <b>To respond to user inquiries/offer support to users </b>  .We may process your information
                                to respond to your inquiries and solve any potential
                                issues you might have with the requested service.
                            </li>
                            <li>
                                <b> To send administrative information to you. </b>  We may process your information to send you details
                                about our products and services,
                                changes to our terms and policies, and other similar information.
                            </li>
                            <li>
                                <b>To fulfil and manage your orders. </b>  We may process your information to fulfil and manage your orders,
                                payments, returns, and exchanges made through the Services.
                            </li>
                            <li>
                                <b>To enable user-to-user communications. </b> We may process your information if you choose
                                to use any of our offerings that allow for communication with another user.
                            </li>
                            <li>
                                <b> To protect our Services.</b>  We may process your information as part of our efforts to keep
                                our Services safe and secure, including fraud monitoring and prevention.
                            </li>
                            <li>
                                <b>To identify usage trends. </b>  We may process information about how you use our
                                Services to better understand how they are being used so we can improve them.
                            </li>
                            <li>
                                <b> To save or protect an individual's vital interest.</b>  We may process your information when necessary
                                to save or protect an individual’s vital interest, such as to prevent harm.
                            </li>
                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <Text pb={3}>
                            <b> In Short:</b>  We only process your personal information when we believe it is necessary and we have
                            a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent,
                            to comply with laws, to provide you with services to enter into or fulfil our contractual obligations,
                            to protect your rights, or to fulfil our legitimate business interests.
                        </Text>
                        <Text pb={3}>
                            <b> If you are located in India, this section applies to you</b>
                        </Text>
                        <Text pb={3}>
                            We collect your personal information and process your personal data in accordance with IT Act,
                            2000 (21 of 2000) and other national and state laws which relate the processing of personal data.
                        </Text>
                        <Text pb={3}>
                            We do not share your personal data with third parties without your
                            prior consent other than the following cases. You can withdraw your consent at any time.
                        </Text>
                        <Text pb={3} pl={3}>
                            a) With third parties who work on our behalf provided such third parties adhere to the data protection principles set out in the IT Act, 2000 (21 of 2000) and other applicable legislation, or enter into a written
                            agreement with us requiring that the third party provide at
                            least the same level of privacy protection as is required by such principles; <br />
                            b) To comply with laws or to respond to lawful requests and legal process; <br />
                            c) To protect the rights and property of us, our partners, customers, and others including
                            to enforce our agreements, policies and terms of use; <br />
                            d) In an emergency, including to protect the personal safety of any person; <br />
                            e) For the purpose of a business deal (or negotiation of a business deal) involving the sale
                            or transfer of all or a part of our business or assets (business deals may include, for example, any merger,
                            financing, acquisition, divestiture or bankruptcy transaction or proceeding).
                        </Text>
                        <Text pb={3}>
                            <b>If you are located in Nepal, this section applies to you: </b>
                        </Text>
                        <Text pb={3}>
                            Currently, Nepal does not have a unified data protection legislation.
                            The Individual Privacy Act 2075 (2018) ('the Privacy Act') enacted to implement and
                            safeguard the fundamental right to privacy guaranteed by the Constitution and the
                            Individual Privacy Regulation 2077 (2020) ('the Privacy Regulation'),
                            framed thereunder are regarded as the data protection legislation.
                            We do not share your personal data with third parties without your prior consent other
                            than the following cases. You can withdraw your consent at any time.
                        </Text>
                        <Text pl={3} pb={3}>
                            f) With third parties who work on our behalf provided such third parties adhere
                            to the data protection principles set out in the The Individual Privacy Act 2075 (2018)
                            ('the Privacy Act') and Individual Privacy Regulation 2077 (2020)
                            ('the Privacy Regulation') and other applicable legislation, or enter
                            into a written agreement with us requiring that the third party provide at
                            least the same level of privacy protection as is required by such principles; <br />
                            g) To comply with laws or to respond to lawful requests and legal process;  <br />
                            h) To protect the rights and property of us, our partners, customers, and others including
                            to enforce our agreements, policies and terms of use;  <br />
                            i) In an emergency, including to protect the personal safety of any person;  <br />
                            j) For the purpose of a business deal (or negotiation of a business deal) involving the sale
                            or transfer of all or a part of our business or assets (business deals may include, for example, any merger, financing, acquisition, divestiture or bankruptcy transaction or proceeding).
                        </Text>
                        <Text pb={3}>
                            <b> If you are located in the EU or UK, this section applies to you. </b>
                        </Text>
                        <Text pb={3}>
                            The General Data Protection Regulation (GDPR) and UK GDPR require us to
                            explain the valid legal bases we rely on in order to process your personal information.
                            As such, we may rely on the following legal bases to process your personal information:
                        </Text>
                        <Text pl={3} pb={3}>
                            ▪ Consent. We may process your information if you have given us permission
                            (i.e., consent) to use your personal information for a specific purpose.
                            You can withdraw your consent at any time. <br />
                            ▪ Performance of a Contract. We may process your personal information
                            when we believe it is necessary to fulfil our contractual obligations
                            to you, including providing our Services or at your request prior to
                            entering into a contract with you. <br />
                            ▪ Legitimate Interests. We may process your information when we believe it is
                            reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example,
                            we may process your personal information for some of the purposes described in order to: <br />
                            <Text py={3} pl={3}>
                                ▪ Analyse how our services are used so we can improve them to engage and retain users <br />
                                ▪ Diagnose problems and/or prevent fraudulent activities
                            </Text>
                            ▪ Legal Obligations. We may process your information where we believe it is necessary
                            for compliance with our legal obligations,
                            such as to cooperate with a law enforcement body or
                            regulatory agency, exercise or defend our legal rights,
                            or disclose your information as evidence in litigation in which we are involved. <br />
                            ▪ Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                        </Text>
                        <Text pb={3}>
                            <b> If you are located in Canada, this section applies to you. </b>
                        </Text>
                        <Text pb={3}>
                            We may process your information if you have given us
                            specific permission (i.e., express consent) to use your personal
                            information for a specific purpose, or in situations where your
                            permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. <br /> <br />
                            In some exceptional cases, we may be legally permitted under applicable
                            law to process your information without your consent, including, for example:
                        </Text>
                        <Text pl={3} pb={3}>
                            ▪ If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way <br />
                            ▪ For investigations and fraud detection and prevention <br />
                            ▪ For business transactions provided certain conditions are met <br />
                            ▪ If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim <br />
                            ▪ For identifying injured, ill, or deceased persons and communicating with next of kin <br />
                            ▪ If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse <br />
                            ▪ If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy
                            of the information and the collection is reasonable for purposes related to investigating a breach of an agreement
                            or a contravention of the laws of Canada or a province <br />
                            ▪ If disclosure is required to comply with a subpoena, warrant, court order,
                            or rules of the court relating to the production of records <br />
                            ▪ If it was produced by an individual in the course of their employment,
                            business, or profession and the collection is consistent with the purposes for which the information was produced <br />
                            ▪ If the collection is solely for journalistic, artistic, or literary purposes <br />
                            ▪ If the information is publicly available and is specified by the regulations <br />
                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <Text>
                            <b> In Short:</b>  We may share information in specific
                            situations described in this section and/or with the following categories of third parties.
                        </Text>
                        <Text pb={3}>
                            <b>  Vendors, Consultants, and Other Third-Party Service Providers.</b>  We may share your data with third-party vendors, service providers, contractors, or agents (“third parties”) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                            The categories of third parties we may share personal information with are as follows:
                        </Text>
                        <Text pb={3} pl={3}>
                            ▪ Government Entities <br />
                            ▪ User Account Registration & Authentication Services <br />
                            ▪ Cloud Computing Services <br />
                            ▪ Data Analytics Services <br />
                            ▪ Data Storage Service Providers <br />

                            ▪ Payment Processors <br />

                            ▪ Website Hosting Service Providers <br />
                        </Text>
                        <Text pb={3}>
                            We also may need to share your personal information in the following situations:
                        </Text>
                        <Text pb={3} pl={3}>
                            ▪ Business Transfers. We may share or transfer your information
                            in connection with, or during negotiations of, any merger,
                            sale of company assets, financing, or acquisition of all or
                            a portion of our business to another company. <br />
                            ▪ When we use Google Maps Platform APIs. We may
                            share your information with certain Google Maps
                            Platform APIs (e.g., Google Maps API, Places API).
                            To find out more about Google’s Privacy Policy,
                            please refer to this  <a href='https://developers.google.com/maps/terms-20180207' style={{color:'blue'}}>link </a>. We use certain Google Maps
                            Platform APIs to retrieve certain information when
                            you make location-specific requests. This includes:
                            live location; and other similar information.
                            A full list of what we use information for can
                            be found in this section and in the previous
                            section titled “HOW DO WE PROCESS YOUR INFORMATION?”.
                            We obtain and store on your device ('cache') your
                            location for three (3) months. You may revoke your
                            consent anytime by contacting us at the contact details
                            provided at the end of this document. The Google Maps
                            Platform APIs that we use store and access cookies and other
                            information on your devices. If you are a user currently in the
                            European Economic Area (EU countries, Iceland, Liechtenstein
                            and Norway) or the United Kingdom.  <br />
                            ▪ We use YouTube Player API, to find out more about YouTube Player API Policy,
                             please refer to this   <a href='https://developers.google.com/youtube/terms/api-services-terms-of-service' style={{color:'blue'}}> link</a> <br />
                            ▪ Affiliates. We may share your information with our affiliates,
                            in which case we will require those affiliates to honour this privacy policy.
                            Affiliates include our parent company and any subsidiaries, joint venture partners,
                            or other companies that we control or that are under common control with us. <br />
                            ▪ Business Partners. We may share your information with our business partners to
                            offer you certain products, services, or promotions. <br />


                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>
                        <Text pb={3}>
                            <b>In Short: </b>  We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.
                        </Text>
                        <Text pb={3}>
                            The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.
                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <Text pb={3}>
                            <b>In Short: </b>  We may use cookies and other tracking technologies to
                            collect and store your information. <br />
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        7. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <Text pb={3}>
                            <b> In Short: </b> We keep your information for as long as necessary to fulfil the purposes outlined in this privacy policy unless otherwise required by law.
                        </Text>
                        <Text pb={3}>
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than twelve (12) months past the termination of the user's account.
                        </Text>
                        <Text pb={3}>
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </Text>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        8. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>


                        <Text pb={3}>
                            <b>  In Short:</b>  We aim to protect your personal information through a system of organizational and technical security measures. <br /> <br />
                            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                        </Text>

                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        9. DO WE COLLECT INFORMATION FROM MINORS?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <Text pb={3}>
                            <b>  In Short:</b>  We do not knowingly collect data from or market to children under 18 years of age. <br /> <br />
                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data, we may have collected from children under age 18, please
                            contact us at <span className='blue-txt'> contact@divisha.io.</span>
                        </Text>

                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        10. WHAT ARE YOUR PRIVACY RIGHTS?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <b>In Short: </b>  In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada,
                        you have rights that allow you greater access to and control ove
                        r your personal information. You may review, change, or terminate your account at any time. <br /> <br />
                        In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws.
                        These may include the right (i) to request access and obtain a copy of your personal information,
                        (ii) to request rectification or erasure; (iii) to restrict the processing of your personal
                        information; and (iv) if applicable, to data portability. In certain circumstances, you may
                        also have the right to object to the processing of your personal information. You can make
                        such a request by contacting us by using the contact details provided in the
                        section <Text fontSize={18}>“HOW CAN YOU CONTACT US ABOUT THIS POLICY?” </Text>  below. <br /> <br />
                        We will consider and act upon any request in accordance with applicable data protection laws. <br /> <br />
                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal information,
                        you also have the right to complain to your local data protection supervisory authority.
                        You can find their contact details here:
                        <a className='blue-txt' target='_blank' href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html">
                            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm .</a> <br /> <br />
                        If you are located in Switzerland, the contact details for the data protection authorities
                        are available here:
                        <a className='blue-txt' href='https://www.edoeb.admin.ch/edoeb/en/home.html' target='_blank'>
                            https://www.edoeb.admin.ch/edoeb/en/home.html. </a>  <br /> <br />

                        <b>Withdrawing your consent: </b>  If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS POLICY?" below or updating your preferences. However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                        <br /> <br />
                        <b>Opting out of marketing and promotional communications: </b>   You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying “STOP” or “UNSUBSCRIBE” to the SMS messages that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS POLICY?" below. You will then be removed from the marketing lists — however, we may still communicate with you, for example to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                        <br /> <br />
                        <b>  Account Information</b>  <br /> <br />
                        If you would at any time like to review or change the information in your account or terminate your account, you can:
                        <Text py={3} pl={3}>  ▪ Contact us using the contact information provided. </Text>

                        Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                        <br /> <br />
                        <b>Cookies and similar technologies: </b>   Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
                        If you have questions or comments about your privacy rights, you may email us at <span className='blue-txt'> contact@divisha.io.</span>
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        11. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>
                        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy.
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <b>In Short: </b>  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.   <br /> <br />
                        California Civil Code Section 1798.83, also known as the "Shine The Light" law,
                        permits our users who are California residents to request and obtain from us,
                        once a year and free of charge, information about categories of personal
                        information (if any) we disclosed to third parties for direct marketing purposes
                        and the names and addresses of all third parties with which we shared personal
                        information in the immediately preceding calendar year. If you are a California
                        resident and would like to make such a request,
                        please submit your request in writing to us using the contact information provided below.   <br /> <br />
                        If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the
                        Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                        <br /> <br />
                        <b> CCPA Privacy Notice </b>
                        <br /> <br />
                        The California Code of Regulations defines a "resident" as:
                        <br /> <br />
                        (1) every individual who is in the State of California for other than a temporary or transitory purpose and
                        <br />
                        (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
                        <br /> <br />
                        All other individuals are defined as "non-residents."    <br />
                        If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
                        <br /> <br />
                        <b> What categories of personal information do we collect?</b>
                        <br /> <br />
                        We have the following categories of personal information under consideration:
                        <Text py={3}>
                            <table>
                                <tr>
                                    <th>Category</th>
                                    <th>Examples</th>
                                </tr>
                                <tr>
                                    <td>A. Identifiers</td>
                                    <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                </tr>
                                <tr>
                                    <td>B. Personal information categories listed in the California Customer Records statute</td>
                                    <td>Name, contact information, education, employment, employment history, and financial information</td>
                                </tr>
                                <tr>
                                    <td>C. Protected classification characteristics under California or federal law</td>
                                    <td>Gender and date of birth</td>
                                </tr>
                                <tr>
                                    <td>D. Commercial information</td>
                                    <td>Transaction information, purchase history, financial details, and payment information</td>
                                </tr>
                                <tr>
                                    <td>E. Biometric information</td>
                                    <td>Fingerprints and voiceprints</td>
                                </tr>
                                <tr>
                                    <td>F. Internet or other similar network activity</td>
                                    <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                                </tr>
                                <tr>
                                    <td>G. Geolocation data</td>
                                    <td>Device location</td>
                                </tr>
                                <tr>
                                    <td>H. Audio, electronic, visual, thermal,olfactory, or similar information</td>
                                    <td>Images and audio, video or call recordings created in
                                        connection with our business activities
                                    </td>
                                </tr>
                                <tr>
                                    <td>I. Professional or employment- related information</td>
                                    <td>Business contact details in order to provide you our services at a business level or job title</td>
                                </tr>
                                <tr>
                                    <td>K. Inferences drawn from other personal information</td>
                                    <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                                </tr>
                            </table>
                        </Text>
                        We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:
                        <Text pb={3} pl={3}>
                            ▪ Receiving help through our customer support channels; <br />
                            ▪ Participation in customer surveys or contests; and <br />
                            ▪ Facilitation in the delivery of our Services and to respond to your inquiries. <br />
                        </Text>
                        <b>  How do we use and share your personal information? </b> <br /> <br />
                        Divisha Innovations Private Limited collects and shares your personal information through:
                        <Text pl={3} py={3}>
                            ▪ Beacons/Pixels/Tags
                        </Text>
                        More information about our data collection and sharing practices can be found in this privacy policy. <br /> <br />
                        You can opt out from the selling of your personal information by disabling cookies in Cookie Preference Settings and
                        clicking on the Do Not Sell My Personal Information link in our communication. <br /> <br />
                        You may contact us by visiting <u className='blue-txt'> <a href='https://www.divisha.io/contact'>  https://www.divisha.io/contact </a>  </u>  or by referring to the
                        contact details at the bottom of this document. <br /> <br />
                        If you are using an authorized agent to exercise your right to opt out, we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
                        <br /> <br />
                        <b>Will your information be shared with anyone else? </b>
                        <br /> <br />
                        We may disclose your personal information with our service providers pursuant
                        to a written contract between us and each service provider.
                        Each service provider is a for-profit entity that processes the information on our behalf.  <br /> <br />
                        We may use your personal information for our own business purposes,
                        such as for undertaking internal research for technological development
                        and demonstration. This is not considered to be "selling" of your personal information.  <br /> <br />
                        Divisha Innovations Private Limited has not disclosed the following categories of
                        personal information to third parties for a business or commercial purpose in the
                        preceding twelve (12) months:
                        <Text py={3} pl={3}>
                            ▪ Category B. Personal information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history, and financial information.
                        </Text>
                        Divisha Innovations Private Limited has not sold the following categories of personal information to third parties in the preceding twelve (12) months:
                        <Text py={3} pl={3}>
                            ▪ Category B. Personal information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history, and financial information.
                        </Text>
                        <b> Your rights with respect to your personal data</b>
                        <Text py={3}>
                            <u> Right to request deletion of the data — Request to delete</u>
                        </Text>
                        You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
                        <Text py={3}>
                            <u> Right to be informed — Request to know</u>
                        </Text>
                        Depending on the circumstances, you have a right to know:
                        <Text py={3} pl={3}>
                            ▪ whether we collect and use your personal information; <br />
                            ▪ the categories of personal information that we collect; <br />
                            ▪ the purposes for which the collected personal information is used; <br />
                            ▪ whether we sell your personal information to third parties; <br />
                            ▪ the categories of personal information that we sold or disclosed for a business purpose; <br />
                            ▪ the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and <br />
                            ▪ the business or commercial purpose for collecting or selling personal information. <br />
                        </Text>
                        In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
                        <Text py={3}>
                            <u> Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u>
                        </Text>
                        We will not discriminate against you if you exercise your privacy rights.
                        <Text py={3}>
                            <u> Verification process </u>
                        </Text>
                        Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
                        <br /> <br />
                        We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud- prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
                        <Text py={3}>
                            <u>  Other privacy rights </u>
                            <Text py={3} pl={3}>
                                ▪ You may object to the processing of your personal information.      <br />
                                ▪ You may request correction of your personal data if it is incorrect or no longer relevant,
                                or ask to restrict the processing of the information.       <br /> <br />
                                ▪ You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
                            </Text>
                        </Text>
                        To exercise these rights, you can contact us referring to the contact details at the bottom of this
                        document or by visiting <u className='blue-txt'> <a href='https://www.divisha.io/contact'>  https://www.divisha.io/contact </a>  </u>
                        If you have a complaint about how we handle your data, we would like to hear from you.
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        13. DO WE MAKE UPDATES TO THIS POLICY?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>

                        <b>In Short: </b>  Yes, we will update this policy as necessary to stay compliant with relevant laws.
                        <br /> <br />
                        We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
                    </Text>
                </Box>

                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>



                        If you have questions or comments about this policy, you may email us at contact@divisha.io or by post to: <br /> <br />
                        Divisha Innovations Private Limited <br /> #104,13th main 5th sector, HSR layout <br /> Bengaluru, Karnataka - 560102 <br />
                        India
                    </Text>
                </Box>
                <Box className='card' px={8} py={4} my={3}>
                    <Text pb={3} className='top-heading' fontSize={{ xxxs: 20, xxs: 26 }}>
                        15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                    </Text>
                    <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}>


                        Based on the applicable laws of your country, you may have the right to
                        request access to the personal information we collect from you, change that
                        information, or delete it in some circumstances. To request to review, update,
                        or delete your personal information, please submit a request form by
                        visiting <u className='blue-txt'> <a href='https://www.divisha.io/contact'>  https://www.divisha.io/contact </a>  </u>
                    </Text>
                </Box>
            </Box>
        </div>
        </>

    )
}

//export default PrivacyPolicy;
export default dynamic (() => Promise.resolve(PrivacyPolicy), {ssr: false})
