import '../styles/PolicyScreen.style.css';
import Header from "../../components/views/Header";
import React from "react";
import strings from "../../strings";

function PolicyScreen() {
    return (
        <div>
            <Header/>
            <div className="w-75 m-lg-auto">
                <h2 className="text-center">{strings.policyNoticeTitle}</h2>
                <h3 className="text-center">{strings.policyNoticeSubTitle1}</h3>
                <p>{strings.policyNoticeLegalNotice1}
                    <br/>{strings.policyNoticeLegalNotice2}
                    <br/>{strings.policyNoticeLegalNotice3}
                </p>
                <h3 className="text-center">{strings.policyNoticeSubTitle2}</h3>
                <p>{strings.policyNoticePrivacy1}</p>
                <h5 className="d-inline">{strings.policyNoticePrivacy2}</h5>
                <p className="d-inline">{strings.policyNoticePrivacy3}</p>
            </div>
        </div>
    )
}

export default PolicyScreen;
