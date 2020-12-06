import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  const title = "Welcome to Afterword";
  return (
    <>
      <div id="wrap">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <Container fluid id="content" style={{  minHeight: '100vh', paddingTop: '70px'}}>
          {props.children}
        </Container>
        <div className="push"></div>
      </div>
      
    </>
  );
}