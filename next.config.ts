import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns:[
      {
        hostname:"placehold.co",
        protocol:"https",
        pathname:"/**",
        port:"",
        search:""
      }
    ],
    
  }
};

export default nextConfig;
