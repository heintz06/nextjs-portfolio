import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <a href="https://skillicons.dev">
      <Image 
        src="https://skillicons.dev/icons?i=js,html,css,cs,java,php,mysql,dotnet,bootstrap,visualstudio,vscode,androidstudio,azure,xd,wordpress,raspberrypi&perline=8" 
        alt="My Skills"
        width={300} // Set your desired width
        height={300} // Set your desired height
        layout="intrinsic" // This can be 'fixed', 'intrinsic', 'responsive', or 'fill'
      />
    </a>
  );
};

export default Skills;
