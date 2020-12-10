import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SmallBanner from "../components/banner/small-banner";
import GetLatestUpdates from "../components/home/get-latest";
import "./contact.css";
import { useStaticQuery, graphql } from "gatsby";
import axios from "axios";
import { createRichText, headerFunc } from '../utils/helper'

const ContactPage = ({ pageContext: { contactUs, seo } }) => {
  const [contact, setContact] = useState({
    name: "",
    emailAddress: "",
    companyName: "",
    countryCode: "",
    contactNumber: "",
    checkboxes: [],
    projectDetail: "",
    projectBudget: "",
    timeFrame: "",
  });

  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: {
          title: { regex: "/Contact-us/" }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            id
            title
            fixed(width: 30) {
              src
            }
          }
        }
      }
    }
  `);

  const filterImage = (title) => {
    const image =
      data && data.allContentfulAsset
        ? data.allContentfulAsset.edges.filter((e, i) => {
            return e.node.title === title;
          })
        : null;
    return image && image.length > 0 ? image[0].node : null;
  };

  const setTextData = (key, value) => {
    setContact({
      ...contact,
      [key]: value,
    });
  };

  const handleCheckbox = (e) => {
    const checkboxes = contact.checkboxes;
    const value = e.target.value;

    if (e.target.checked) {
      checkboxes.push(value);
      setTextData("checkboxes", checkboxes);
    } else {
      checkboxes.splice(value, 1);
      setTextData("checkboxes", checkboxes);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      emailAddress,
      companyName,
      countryCode,
      contactNumber,
      checkboxes,
      projectDetail,
      projectBudget,
      timeFrame,
    } = contact;

    const body = {
      fields: {
        endUserName: {
          "en-US": name,
        },
        endUserEmailAddress: {
          "en-US": emailAddress,
        },
        endUserCompanyName: {
          "en-US": companyName,
        },
        endUserContactNumber: {
          "en-US": `${countryCode}${contactNumber}`,
        },
        endUserProjectTypeCheckBoxes: {
          "en-US": createRichText(checkboxes, 'array'),
        },
        endUserProjectDetail: {
          "en-US": createRichText(projectDetail, 'string'),
        },
        endUserProjectBudget: {
          "en-US": projectBudget,
        },
        endUserTimeFrame: {
          "en-US": timeFrame,
        },
      },
    };

    const res = await axios
      .post(
        `https://api.contentful.com/spaces/gt4nxopyo75x/environments/master/entries`,
        body,
        {
          headers: headerFunc(),
        }
      )
      .catch((err) => {
        return err;
      });

    if(res && res.data && res.data.sys){
      alert('submitted')
    }else{
      alert('try again!')
    }
  };

  // const flag = filterImage("Contact-us-location-marker")

  return (
    <Layout>
      <SEO
        title={seo.title}
        currentPage={"/contact"}
        description={seo.description}
        keywords={seo.keywords}
      />
      <SmallBanner
        title="Contact Us"
        links={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Contact Us",
            link: "/contact",
          },
        ]}
      />
      <div className="contact">
        <div className="container">
          <h4 className="text-left"> {contactUs.node.title} </h4>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="card extraShadow">
                <div className="card-body">
                  <Image
                    data={filterImage("Contact-us-location-marker")}
                    width="15"
                  />
                  <p> {contactUs.node.address} </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card extraShadow">
                <div className="card-body">
                  <Image data={filterImage("Contact-us-email")} width="30" />
                  <p> {contactUs.node.emailAddress} </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card extraShadow">
                <div className="card-body">
                  <Image
                    data={filterImage("Contact-us phone-call")}
                    width="20"
                  />
                  <p> {contactUs.node.phoneNumber} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3"> </div>
            <div className="col-lg-6 col-md-6">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h5> {contactUs.node.formTitle} </h5>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={contactUs.node.textboxPlaceholders.name}
                    onChange={(e) => {
                      setTextData("name", e.target.value);
                    }}
                    value={contact.name}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={contactUs.node.textboxPlaceholders.email}
                    onChange={(e) => {
                      setTextData("emailAddress", e.target.value);
                    }}
                    value={contact.emailAddress}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={contactUs.node.textboxPlaceholders.companyName}
                    onChange={(e) => {
                      setTextData("companyName", e.target.value);
                    }}
                    value={contact.companyName}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <select
                        className="form-control"
                        onChange={(e) => {
                          setTextData("countryCode", e.target.value);
                        }}
                        value={contact.countryCode}
                        required
                      >
                        <option value="">select</option>
                        <option value="+44">+44</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      className="form-control select"
                      placeholder={
                        contactUs.node.textboxPlaceholders.name.contactNumber
                      }
                      onChange={(e) => {
                        setTextData("contactNumber", e.target.value);
                      }}
                      value={contact.contactNumber}
                      required
                    />
                  </div>
                </div>
                <h5> {contactUs.node.checkboxTitle} </h5>
                <div className="row martb">
                  {contactUs.node.checkboxes.map((e, i) => (
                    <div className="col-lg-3 col-md-3" key={i}>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkboxes"
                          id={`customCheck${i}`}
                          value={e.content}
                          checked={contact.checkboxes.includes(e.content)}
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={`customCheck${i}`}
                        >
                          {e.content}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder={contactUs.node.textareaPlaceholder}
                    onChange={(e) => {
                      setTextData("projectDetail", e.target.value);
                    }}
                    value={contact.projectDetail}
                    required
                  ></textarea>
                </div>
                <h5> {contactUs.node.radioButtonTitle} </h5>
                <div className="row martb">
                  {contactUs.node.radioButtons.map((e, i) => (
                    <div className="col-lg-3 col-md-3" key={i}>
                      <div className="form-group">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id={`customRadi${i}`}
                            name="projectbudget"
                            className="custom-control-input"
                            checked={contact.projectBudget === e.content}
                            onChange={(e) => {
                              setTextData("projectBudget", e.target.value);
                            }}
                            value={e.content}
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`customRadi${i}`}
                          >
                            {e.content}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h5> {contactUs.node.radioButtonTitle2} </h5>
                <div className="row martb">
                  {contactUs.node.radioButtons2.map((e, i) => (
                    <div className="col-lg-3 col-md-3" key={i}>
                      <div className="form-group">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id={`customRadio10${i}`}
                            name="timeframe"
                            className="custom-control-input"
                            checked={contact.timeFrame === e.content}
                            onChange={(e) => {
                              setTextData("timeFrame", e.target.value);
                            }}
                            value={e.content}
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`customRadio10${i}`}
                          >
                            {e.content}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <GetLatestUpdates />
        </div>
      </div>
    </Layout>
  );
};

const Image = ({ data, width }) => (
  <div className="text-center">
    {data ? (
      <img
        src={data.fixed.src}
        alt={data.title}
        style={{ width: `${width}px` }}
      />
    ) : null}
  </div>
);

export default ContactPage;
