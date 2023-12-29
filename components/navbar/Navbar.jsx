import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <span class="nav-link-active" href="#">
                  <Link
                    href="/about"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About
                  </Link>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link-active" href="#">
                  <Link
                    href="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login
                  </Link>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link-active" href="#">
                  <Link
                    href="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    SignUp
                  </Link>
                </span>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
