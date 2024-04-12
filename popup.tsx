import { useEffect, useState } from "react"

function IndexPopup() {
  return (
    <div
      style={{
        width: "100vh",
        height: "50vh"
      }}>
      <div
        style={{
          backgroundColor: "wheat",
          paddingTop: 10,
          paddingBottom: 10,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold"
        }}>
        Oblivious - Safety in every step
      </div>
      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 18,
            fontWeight: "500"
          }}>
          What it does ?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <p style={{ textAlign: "center" }}>
            When you are uploading any file to the web site we will ensure that
            it is encrypted and your file is secure in our hands
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
