import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <h2>Contact</h2>
        <table id='contact-table'>
          <tbody>

            <tr>
              <td rowSpan='2'>
                <p>
                  <strong>U.S. Mail:</strong><br />
                  Sunshine Brass Band<br />
                  1515 North Riverhills Drive<br />
                  Temple Terrace, FL 33617
              </p>
              </td>
              <td>
                <p>
                  <strong>President:</strong> Randy Stribling<br />
                  <strong>Phone:</strong> (813) 523-6403<br />
                </p>

                <p>
                  <strong>Webmaster:</strong>
                  <a href="mailto:tim@sunshinebrass.com">Tim Bailey-Jones</a><br />
                  <strong>Phone:</strong> (813) 900-8131
              </p>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;