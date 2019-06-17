import React from "react";

function AppLoader() {
  return (
    <div style={{ height: "100%", display: "grid" }}>
      <span style={{ margin: "auto" }}>Loading...</span>
    </div>
  );
}

export default React.memo(AppLoader);
