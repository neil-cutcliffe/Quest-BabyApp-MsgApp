/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Post1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `700px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Image1 = styled('div', {
  shouldForwardProp: (prop) => !['props'].includes(prop.toString()),
})(({ props }) => ({
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `408px`,
  margin: `0px`,
  backgroundImage: props.post.image,
}));

const InternalLink = styled(Link)({
  textDecoration: `none`,
  width: `100%`,
});

const Content = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  alignSelf: `stretch`,
  height: `380px`,
  margin: `30px 0px 0px 0px`,
});

function Post(props) {
  return (
    <Post1 className={props.className}>
      <InternalLink to="/StandaloneImage">
        <Image1 props={props}></Image1>
      </InternalLink>
      <Content>{props.post.content}</Content>
    </Post1>
  );
}

export default Post;
