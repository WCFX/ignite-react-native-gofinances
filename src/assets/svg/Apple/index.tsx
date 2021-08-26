import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.684 24c-3.572-.02-6.527-7.312-6.527-11.025 0-6.066 4.55-7.394 6.304-7.394.79 0 1.635.31 2.379.585.52.191 1.059.39 1.358.39.18 0 .602-.17.974-.317.796-.316 1.785-.71 2.937-.71h.007c.86 0 3.469.19 5.037 2.544l.368.552-.529.4c-.755.57-2.133 1.609-2.133 3.668 0 2.439 1.56 3.377 2.31 3.828.331.2.674.404.674.854 0 .293-2.34 6.589-5.739 6.589-.831 0-1.419-.25-1.937-.47-.525-.224-.977-.416-1.725-.416-.38 0-.858.18-1.366.37-.693.258-1.478.552-2.369.552h-.023zM16.47 0c.088 3.191-2.194 5.405-4.474 5.266C11.621 2.719 14.276 0 16.47 0z"
        fill="#41414D"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
