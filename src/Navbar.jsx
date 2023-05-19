import React from "react";
import "./Navbar.css"; // Importing CSS styles for the Navbar component
import docs from "./docs.png"; // Importing the Google Docs logo image
import user from "./Adarsh.jpeg"; // Importing the user avatar image
import { UilCommentAltMessage } from "@iconscout/react-unicons"; // Importing the Comment Alt Message icon from Unicons
import { UilVideo } from "@iconscout/react-unicons"; // Importing the Video icon from Unicons

const Navbar = () => {
  return (
    <div className="navbar">
      {/* The main container for the navbar */}
      <div className="navbar__left">
        {/* The left section of the navbar */}
        <img className="navbar__logo" src={docs} alt="Google Docs Logo" />
        {/* Google Docs logo image */}
        <div className="navbar__document-info">
          {/* Container for document information */}
          <span className="navbar__document-name">Untitled Document ☆</span>
          {/* Document name */}
          <div className="navbar__options">
            {/* Container for options */}
            <button className="navbar__option">File</button> {/* File option */}
            <button className="navbar__option">Edit</button> {/* Edit option */}
            <button className="navbar__option">View</button> {/* View option */}
            <button className="navbar__option">Insert</button>
            {/* Insert option */}
            <button className="navbar__option">Format</button>
            {/* Format option */}
            <button className="navbar__option">Tools</button>
            {/* Tools option */}
            <button className="navbar__option">Extensions</button>
            {/* Extensions option */}
            <button className="navbar__option">Help</button> {/* Help option */}
          </div>
        </div>
      </div>
      <div className="navbar__right">
        {/* The right section of the navbar */}
        <div className="navbar__account">
          {/* Container for account-related elements */}
          <UilCommentAltMessage className="icon" />
          {/* Comment Alt Message icon */}
          <UilVideo className="icon" /> {/* Video icon */}
          <button className="navbar__share-button">Share</button>
          {/* Share button */}
          <img className="navbar__user-avatar" src={user} alt="User Avatar" />
          {/* User avatar image */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
