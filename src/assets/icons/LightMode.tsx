import type { LightModeProps } from "../../types/types";

function LightMode({ toggleIsDarkMode }: LightModeProps) {
  return (
    <div
      onClick={toggleIsDarkMode}
      className="hover:-rotate-45 transition-all hover:opacity-50 duration-[500ms] hover:scale-110 cursor-cell"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 58 58"
        width="48px"
        height="48px"
        fill="white"
      >
        <g>
          <path d="M29,0h-1v0.025C12.471,0.555,0,13.345,0,29s12.471,28.445,28,28.975V58h1c15.991,0,29-13.01,29-29S44.991,0,29,0z    M55.965,30.373c-0.007,0.147-0.023,0.291-0.033,0.437c-0.02,0.307-0.039,0.613-0.07,0.917c-0.018,0.178-0.045,0.353-0.066,0.53   c-0.033,0.269-0.062,0.539-0.103,0.805c-0.028,0.187-0.065,0.371-0.097,0.557c-0.044,0.253-0.085,0.507-0.136,0.758   c-0.038,0.189-0.085,0.375-0.127,0.562c-0.055,0.244-0.107,0.489-0.169,0.731c-0.048,0.188-0.103,0.372-0.155,0.558   c-0.066,0.237-0.13,0.475-0.202,0.71c-0.057,0.186-0.122,0.369-0.183,0.553c-0.077,0.23-0.151,0.462-0.234,0.689   c-0.067,0.183-0.14,0.364-0.21,0.545c-0.087,0.224-0.172,0.449-0.265,0.671c-0.075,0.179-0.156,0.354-0.235,0.531   c-0.097,0.219-0.193,0.439-0.297,0.655c-0.084,0.175-0.173,0.347-0.26,0.52c-0.107,0.212-0.213,0.425-0.325,0.635   c-0.092,0.17-0.188,0.337-0.283,0.505c-0.117,0.207-0.234,0.415-0.356,0.618c-0.099,0.165-0.203,0.326-0.305,0.489   c-0.126,0.201-0.253,0.401-0.384,0.599c-0.108,0.161-0.22,0.32-0.331,0.479c-0.134,0.192-0.268,0.384-0.407,0.573   c-0.116,0.157-0.236,0.311-0.355,0.466c-0.142,0.184-0.285,0.369-0.432,0.55c-0.123,0.151-0.249,0.298-0.375,0.447   c-0.152,0.178-0.304,0.356-0.46,0.531c-0.129,0.144-0.262,0.286-0.394,0.427c-0.16,0.171-0.32,0.341-0.484,0.507   c-0.136,0.139-0.276,0.274-0.415,0.41c-0.167,0.163-0.335,0.325-0.506,0.483c-0.143,0.132-0.288,0.262-0.434,0.391   c-0.174,0.154-0.349,0.307-0.527,0.457c-0.151,0.127-0.304,0.251-0.457,0.374c-0.179,0.144-0.36,0.287-0.543,0.427   c-0.158,0.12-0.317,0.238-0.478,0.355c-0.186,0.136-0.373,0.269-0.562,0.4c-0.164,0.113-0.329,0.224-0.495,0.333   c-0.192,0.126-0.385,0.251-0.581,0.373c-0.17,0.106-0.341,0.209-0.513,0.311c-0.197,0.117-0.396,0.232-0.597,0.344   c-0.176,0.098-0.353,0.195-0.531,0.289c-0.202,0.107-0.406,0.211-0.611,0.314c-0.182,0.091-0.365,0.18-0.55,0.266   c-0.206,0.097-0.414,0.19-0.623,0.282c-0.188,0.083-0.377,0.164-0.567,0.242c-0.21,0.087-0.423,0.17-0.636,0.251   c-0.194,0.074-0.389,0.147-0.585,0.217c-0.214,0.076-0.429,0.148-0.645,0.219c-0.2,0.065-0.4,0.13-0.602,0.191   c-0.217,0.065-0.435,0.126-0.654,0.186c-0.205,0.056-0.411,0.112-0.618,0.163c-0.22,0.055-0.441,0.104-0.663,0.153   c-0.211,0.047-0.421,0.093-0.633,0.135c-0.222,0.044-0.446,0.082-0.669,0.12c-0.216,0.037-0.432,0.073-0.65,0.105   c-0.223,0.032-0.448,0.059-0.673,0.086c-0.222,0.026-0.443,0.053-0.666,0.074c-0.226,0.021-0.453,0.036-0.68,0.052   c-0.225,0.015-0.45,0.032-0.677,0.042c-0.063,0.003-0.127,0.003-0.19,0.005V2.025c0.063,0.002,0.127,0.002,0.19,0.005   c0.227,0.01,0.452,0.026,0.677,0.042c0.227,0.016,0.454,0.031,0.68,0.052c0.223,0.021,0.445,0.048,0.666,0.074   c0.225,0.027,0.45,0.054,0.673,0.086c0.218,0.032,0.434,0.068,0.65,0.105c0.224,0.038,0.448,0.076,0.669,0.12   c0.212,0.042,0.423,0.088,0.633,0.135c0.222,0.049,0.444,0.099,0.663,0.153c0.207,0.051,0.413,0.107,0.618,0.163   c0.219,0.06,0.438,0.121,0.654,0.186c0.202,0.061,0.402,0.125,0.602,0.191c0.216,0.071,0.432,0.143,0.645,0.219   c0.196,0.07,0.391,0.143,0.585,0.217c0.213,0.081,0.425,0.165,0.636,0.251c0.19,0.078,0.379,0.159,0.567,0.242   c0.209,0.092,0.417,0.185,0.623,0.282c0.184,0.087,0.368,0.176,0.55,0.266c0.205,0.102,0.409,0.206,0.611,0.314   c0.178,0.094,0.355,0.191,0.531,0.289c0.201,0.112,0.399,0.227,0.597,0.344c0.172,0.102,0.343,0.206,0.513,0.311   c0.195,0.122,0.389,0.246,0.581,0.373c0.166,0.109,0.331,0.22,0.495,0.333c0.189,0.131,0.377,0.265,0.562,0.4   c0.16,0.117,0.32,0.235,0.478,0.355c0.183,0.14,0.364,0.283,0.543,0.427c0.154,0.124,0.306,0.248,0.457,0.374   c0.178,0.15,0.353,0.303,0.527,0.457c0.146,0.129,0.291,0.258,0.434,0.391c0.171,0.158,0.339,0.32,0.506,0.483   c0.139,0.136,0.279,0.271,0.415,0.41c0.164,0.167,0.324,0.337,0.484,0.507c0.132,0.141,0.265,0.283,0.394,0.427   c0.156,0.174,0.308,0.352,0.46,0.531c0.126,0.148,0.252,0.296,0.375,0.447c0.147,0.181,0.29,0.365,0.432,0.55   c0.119,0.155,0.239,0.309,0.355,0.466c0.139,0.188,0.273,0.381,0.407,0.573c0.111,0.159,0.223,0.317,0.331,0.479   c0.131,0.197,0.258,0.398,0.384,0.599c0.102,0.163,0.206,0.324,0.305,0.489c0.122,0.204,0.239,0.411,0.356,0.618   c0.095,0.168,0.192,0.335,0.283,0.505c0.112,0.209,0.218,0.422,0.325,0.635c0.087,0.173,0.176,0.345,0.26,0.52   c0.103,0.216,0.199,0.436,0.297,0.655c0.079,0.177,0.16,0.353,0.235,0.531c0.093,0.221,0.178,0.446,0.265,0.671   c0.07,0.182,0.144,0.362,0.21,0.545c0.083,0.228,0.157,0.459,0.234,0.689c0.061,0.184,0.126,0.367,0.183,0.553   c0.072,0.235,0.136,0.473,0.202,0.71c0.052,0.186,0.107,0.371,0.155,0.558c0.062,0.242,0.114,0.487,0.169,0.731   c0.042,0.187,0.089,0.373,0.127,0.562c0.051,0.251,0.092,0.505,0.136,0.758c0.032,0.186,0.069,0.37,0.097,0.557   c0.04,0.266,0.07,0.536,0.103,0.805c0.021,0.177,0.048,0.352,0.066,0.53c0.031,0.304,0.049,0.61,0.07,0.917   c0.01,0.146,0.025,0.291,0.033,0.437C55.988,28.082,56,28.54,56,29S55.988,29.918,55.965,30.373z M20.716,54.694   C20.89,54.514,21,54.271,21,54c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,0.028,0.014,0.051,0.016,0.078   c-6.867-2.744-12.35-8.227-15.094-15.094C3.949,38.986,3.972,39,4,39c0.552,0,1-0.448,1-1s-0.448-1-1-1   c-0.271,0-0.514,0.11-0.694,0.284C2.461,34.672,2,31.89,2,29C2,16.09,11.11,5.273,23.238,2.625C23.421,2.849,23.688,3,24,3   c0.444,0,0.807-0.294,0.938-0.694C25.941,2.154,26.964,2.063,28,2.025V5c-0.552,0-1,0.448-1,1s0.448,1,1,1v6c-0.552,0-1,0.448-1,1   s0.448,1,1,1v6c-0.552,0-1,0.448-1,1s0.448,1,1,1v6c-0.552,0-1,0.448-1,1s0.448,1,1,1v6c-0.552,0-1,0.448-1,1s0.448,1,1,1v6   c-0.552,0-1,0.448-1,1s0.448,1,1,1v6c-0.552,0-1,0.448-1,1s0.448,1,1,1v0.975C25.468,55.882,23.025,55.441,20.716,54.694z"></path>
          <circle cx="24" cy="10" r="1"></circle>
          <circle cx="16" cy="10" r="1"></circle>
          <circle cx="20" cy="14" r="1"></circle>
          <circle cx="20" cy="6" r="1"></circle>
          <circle cx="24" cy="18" r="1"></circle>
          <circle cx="16" cy="18" r="1"></circle>
          <circle cx="20" cy="22" r="1"></circle>
          <circle cx="24" cy="26" r="1"></circle>
          <circle cx="16" cy="26" r="1"></circle>
          <circle cx="20" cy="30" r="1"></circle>
          <circle cx="24" cy="34" r="1"></circle>
          <circle cx="16" cy="34" r="1"></circle>
          <circle cx="20" cy="38" r="1"></circle>
          <circle cx="24" cy="42" r="1"></circle>
          <circle cx="16" cy="42" r="1"></circle>
          <circle cx="20" cy="46" r="1"></circle>
          <circle cx="24" cy="50" r="1"></circle>
          <circle cx="16" cy="50" r="1"></circle>
          <circle cx="12" cy="14" r="1"></circle>
          <circle cx="8" cy="18" r="1"></circle>
          <circle cx="12" cy="22" r="1"></circle>
          <circle cx="4" cy="22" r="1"></circle>
          <circle cx="8" cy="26" r="1"></circle>
          <circle cx="12" cy="30" r="1"></circle>
          <circle cx="4" cy="30" r="1"></circle>
          <circle cx="8" cy="34" r="1"></circle>
          <circle cx="12" cy="38" r="1"></circle>
          <circle cx="8" cy="42" r="1"></circle>
          <circle cx="12" cy="46" r="1"></circle>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  );
}

export default LightMode;
