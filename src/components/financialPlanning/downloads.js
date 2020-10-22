import React from 'react'

const downloads = () => {
    return (
        <div className="downloads my-3">
            <div className="downloads__wrapper">
                <h2 className="downloads__wrapper--h2 contentTitle--subtitle">
                    Download
              </h2>
                <div className="downloads__wrapper--divFlex dflex">
                    <div className="downloads__wrapper--img1">&nbsp;</div>
                    <p className="downloads__wrapper--p1 ml-2 mt-1">
                        Company White Paper <br />
                  1.30 MB
                </p>
                </div>
                <div className="downloads__wrapper--divFlex dflex">
                    <div className="downloads__wrapper--img1">&nbsp;</div>
                    <p className="downloads__wrapper--p2 ml-2 mt-1">
                        Company Media Kit <br />
                  1.22 MB
                </p>
                </div>
            </div>
        </div>
    )
}

export default downloads
