import React from 'react';
import { FormattedMessage } from 'react-intl';
import MailIcon from '@material-ui/icons/Mail'; // Here it used the material icon to get the Mail icon

const FooterSection = () => (
    <div id="footerSection">
        <div className="mail_holder">
            <MailIcon style={{color: 'white'}} className="mailIcon"/>
            <FormattedMessage id="mail.txt" children={val => <span className="mail_txt">{val}</span>}></FormattedMessage>
        </div>
        <div className="foo_holder">
            <FormattedMessage id="he.txt.ap" children={val => <p className="exp_txt">{val}</p>}></FormattedMessage>
            <FormattedMessage id="copy.txt" children={val => <p className="copy_txt">{val}</p>}></FormattedMessage>
        </div>
    </div>
)

export default FooterSection;