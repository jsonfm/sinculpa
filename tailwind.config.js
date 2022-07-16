/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "Cursive"],
        'display': ['Oswald'],
        'body': ["Open Sans"],
      },
      spacing: {
        '128': '32rem',
        '140': '35rem',
        '180': '40rem',
        '50vh': '50vh',
        '60vh': '50vh',
        '70vh': '70vh',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'woods': "url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg')",
        'fruits': "url('https://lh3.googleusercontent.com/fife/AAWUweWcOA_-9cJR4k_TCgdbnlU4V7AofImdYR8ITiGGeM5Ga2G-AY01ZTug6_3Qsm1tu-FsE_YXZCKLvmUKTz4gFbm1HSgo9GJU22pm3-NtWwlAFXWjJjJGCDvHgUXiwH3ET4ysS6Ctaz1uXt8aWLkYUDjtBtddvJfJgJVIb-Q5bqGvm6E1EuC2_elVK_CIcIBXFllENTMo1BXeNqgbWDYuINpqMEX798qk8FA6ijmwfJtyKQJlL225J78AkxZWpONlXusca-ArxXhDvJDaTFmgL8vE2zo1h--QExGiwXr2FT0b1L6mBqtckdCm1olD1AV1Bnobe05_43L38JEicT72Em2d9wTlk4NPh3mmGiV4-xQKBpsu9hKt7i0eOPOT6ZhLdhLS_vfw1vIMTkjiAnQ3jDt7or_2lpSF4NgX7xvSPyWla_ihHHw7SyGsnPezHsZdl7HgYDLwvbc6Ik-rG-WKHfgBE_QIDnSvrvAHyKY5_coTpibB4SkZv6k-6H_d8aS3MCrFW4G_ZM7NCONQ3I_GdqGPO-LxfyW4-UmbYM3yt3dmyACoYVqnh2yl65BV_0E2Qu24y07tFvURLJirs1sKe0HPX5ZE6_hJRpqf-OqZTR37iVFM0u4bLNCBg7PuWlY_MRbMlfb67sJXxPFOZ9Sz46dWEqybm2zW4ah3gQDUskCjldGgyxPbBtu-Vhy-in-qMx8jj8ncawmD9i36FM6z3a9SADgHhN1vkpl7Ddcw82MnafS9_9934aq4siXil0wNdnr7ptjALpPYqxzhjhCXk3rNc-UjrIBA8Ih5xH5jXzsOGG47eKElZlDlgAFvjTY99m0u2ojqdDWLUhaRzRWnrr48qOYlYA_TWtSOzRfKuOPLDxvvQugejgToNuqY35UGNmlqi1bupF50ahJJcI6JahpzLcAGdXuhUai2u7ZWUTrT_1AjzsW93vAoYkUOwiQQ8uYH1YCBodAKfqc8k5HrWd_sbAxeGEvKZBsFo_ukI08Go8aXYpqKM98Sn8RzOD3mKGNNzdVh9Is7gL4nWb4QLdCk9klgafoQOLCvLnKZh6LtK2vS_PhEashq0BR5sIuT_S1CYL32hI2G0fsE7CXgHrC9YhiZfp3jgK_VORG2vc6A9l3ZT6Tnn9TusC7EsLC4Ya-KBTXhuel-9iTREXQFaitdqhOGWZrq7WhkTgMGpuIl-JRp-_dyR4Jgz38npMBrjc5p_GXB8fpFTpNabX-DRif1dB6x0aluOBRHvozEYN13ji1VMRLKVPQ4wN-9Bw28OFYCEUyUmA=w1836-h1204')",
      },
    },
  },
  plugins: [],
}
