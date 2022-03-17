import React, { Fragment } from "react";

export const Renderer = ({ config }) => {
  const { component: Component, ...props } = config;

  return (
    <Fragment key={props.name}>
      <Component {...props} />
    </Fragment>
  );
};
