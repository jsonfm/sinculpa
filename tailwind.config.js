/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "Cursive"],
        poiret: ["Poiret One", "Cursive"],
        'display': ['Ubuntu'],
        'body': ["Ubuntu"],
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
        'woods': "url('https://img.freepik.com/free-photo/tasty-fresh-appetizing-italian-food-ingredients-dark-background-ready-cook-home-italian-healthy-food-cooking-concept-toning_1220-1820.jpg?w=2000')",
        'fruits': "url('https://lh3.googleusercontent.com/fife/AAWUweWcOA_-9cJR4k_TCgdbnlU4V7AofImdYR8ITiGGeM5Ga2G-AY01ZTug6_3Qsm1tu-FsE_YXZCKLvmUKTz4gFbm1HSgo9GJU22pm3-NtWwlAFXWjJjJGCDvHgUXiwH3ET4ysS6Ctaz1uXt8aWLkYUDjtBtddvJfJgJVIb-Q5bqGvm6E1EuC2_elVK_CIcIBXFllENTMo1BXeNqgbWDYuINpqMEX798qk8FA6ijmwfJtyKQJlL225J78AkxZWpONlXusca-ArxXhDvJDaTFmgL8vE2zo1h--QExGiwXr2FT0b1L6mBqtckdCm1olD1AV1Bnobe05_43L38JEicT72Em2d9wTlk4NPh3mmGiV4-xQKBpsu9hKt7i0eOPOT6ZhLdhLS_vfw1vIMTkjiAnQ3jDt7or_2lpSF4NgX7xvSPyWla_ihHHw7SyGsnPezHsZdl7HgYDLwvbc6Ik-rG-WKHfgBE_QIDnSvrvAHyKY5_coTpibB4SkZv6k-6H_d8aS3MCrFW4G_ZM7NCONQ3I_GdqGPO-LxfyW4-UmbYM3yt3dmyACoYVqnh2yl65BV_0E2Qu24y07tFvURLJirs1sKe0HPX5ZE6_hJRpqf-OqZTR37iVFM0u4bLNCBg7PuWlY_MRbMlfb67sJXxPFOZ9Sz46dWEqybm2zW4ah3gQDUskCjldGgyxPbBtu-Vhy-in-qMx8jj8ncawmD9i36FM6z3a9SADgHhN1vkpl7Ddcw82MnafS9_9934aq4siXil0wNdnr7ptjALpPYqxzhjhCXk3rNc-UjrIBA8Ih5xH5jXzsOGG47eKElZlDlgAFvjTY99m0u2ojqdDWLUhaRzRWnrr48qOYlYA_TWtSOzRfKuOPLDxvvQugejgToNuqY35UGNmlqi1bupF50ahJJcI6JahpzLcAGdXuhUai2u7ZWUTrT_1AjzsW93vAoYkUOwiQQ8uYH1YCBodAKfqc8k5HrWd_sbAxeGEvKZBsFo_ukI08Go8aXYpqKM98Sn8RzOD3mKGNNzdVh9Is7gL4nWb4QLdCk9klgafoQOLCvLnKZh6LtK2vS_PhEashq0BR5sIuT_S1CYL32hI2G0fsE7CXgHrC9YhiZfp3jgK_VORG2vc6A9l3ZT6Tnn9TusC7EsLC4Ya-KBTXhuel-9iTREXQFaitdqhOGWZrq7WhkTgMGpuIl-JRp-_dyR4Jgz38npMBrjc5p_GXB8fpFTpNabX-DRif1dB6x0aluOBRHvozEYN13ji1VMRLKVPQ4wN-9Bw28OFYCEUyUmA=w1836-h1204')",
        'drinks': "url('https://lh3.googleusercontent.com/fife/AAWUweXP_suxYOlKHHP7hBjsaOhgUa38zrH6lQOwxvaZHexMq_n9D7uX5DGqAcOOt6dUjSPZEQPLnu9ov_PH_xzhgSUpVQZnq1gePzzQfiPi8MqWb3E4JrDx_4XrMYQjCVbl48dVKKfHD7d7FuCz1lRx3wmTWk-b9AE3JmuDsFnvG4xMZKLzfNcJ6OuyfVMPCswKDQAscIj71gWjeecnKk0SWmX-3D-ma8NTgihtBV4RLO6Bz4ne2oX3i14eAq2grgNgTPLYxf7y76V__dbsDZufx3-7vuH4jo03sysgb7lyb2g4DhoRHnRrtNNj0K4cCUqg823tR6hYIzkAQGT-9B3xwyUkUPwR7zjH8Sxy_Pw1Aq2cxwYPa_ofXKKx42giUN_fesZunA6Q_DulWk4xQM0WLaAnG78Yu-6LEP4e20OHdtzC52vTLRHi99SVilhw3vBMGoyVNWUrFxKlgrRchAxmx2yINV6JaWC9vRYznA6hCzHpyujfqIencZyekHLwc2M7aXPIZu8XZFDHEV8p-3Ol5uGRgzvpXH7gDhgMPmHMs6GtkN4UMafs5pZ2Gj8wlHE9VyAPzzMxPeoNkEm03pU-p_y1sh-KqNArokJk-OXwt7qRpN_bSLAaoBPU6fMszUtWRFxMGLTQx0I5SOG5B3FUQt5x4EFtSmdXQg7lRrVlRcdm4wYyTRbz2OSrRZTzZ38oy1EEGJPBTOngndX5yvgwBcsCZvEKgzQNh-3mX9tzTgT2YnD5LZlGmSBXSuHvEOT0W4kOLKegVTm6Axk10ZkJ0VwbKNKJXzkGRHj_Og6lkeqKbf-GImwP35CoeUb_lHT8t5mTRT1q8NC0ghlq0r-clJfjiXoh1jcL49z2lOEGRk5OVBQbuZf_6Fy2wxSopMQI-bKzx5-3O9GBwnJ2eoj-_W23yzmLr6QsvrlxhUWlXkkfEsUqLQKiaMZZ_62wrBjvG5aORMyrCIRxVHvl6vnZQNHNsjmg4pfuHo4Tm4hYnsznVPolGyif6Kiceitbc7lYba7r4yD7FnSXETZU45fWuds_lF9qDUo8QemfnEt9_RTRmO8SZkBI_b0ry6RmpUkun-INKTNWWsROpWw0LkR5AAaTwvYtosURnRiABxjJqtBPTAXQ-qd_aaap7F3zv6k-gdlkUVGR5i7AwLg-6lKlE8gMJY6YQPWgoLVcnQHUhIEklJwCwGDiOxvK8bAdiX070foRmpZ3xrbuOP7maegcL0xT2JVc8oG_SBKeUS1I7mYuRgy5ZAIseEPCuh4LSD_XlKvRPyvYAQ=w2058-h1236')",
        'drinks-mobile': "url('https://lh3.googleusercontent.com/fife/AAWUweVdzY6HA81Hprr7SxPwFg17agZ1mTz6bcJ9VOcFSHCHyjOy1UrT28qnLMdCHf9tXjHsAfRG9p_BYluEa185YcteSs4mtCjMKsQzIAx0FjCHdaMz4bAoVfNZgh9uqeuUYr98832ge5zG_dxZYJZdgghrRD11No705PA5UsOjmGhAJK5PO48aZKlJV0n6_QNWaOadK9OIZtADJ9J5zExU_rJOxE5adbkT1ZKSIQW_1lBKQiUwPxMtuwz_wcgOTM2q2xOuUQIWFcSbVqJPt64DDv-KTLhmh0SjjSTItgYHzPl-XfrItqQ5UcdgrVczd5c0tFNilvtRfqVuu8DxoWyNfS6rHH3nszMliEZJUz6_aGcSAQ6juK91L-9LPixL0T9RgjE9ygUBDcqwJ8AmRmx8TG2ia3Op2LhmJBJqt9qWHR5YVdp0FF4ZN5-ePDaUtvwoRiyYu5tvTB7ru1xKY2sGdDmmx9UDLhN0dSAN0lhS7x0D8qqTIlGk0yDlyb6mUmCaaBlvs8HSwWeUG7RjY70T8bmvmaQbzEoZ5ppkM4VpFlAO0R0eDOcjZaD16rLg9KMTKBOnDxCG6cpBKAMc_zEOYtIOjrUF4D6LJVL-dQODpApg30BJl1med_evMR6hj-5vEwcx4pVqloRjCM0J5L1iO5dYNAyeoFZAkp2o6qI1yJR5546G9nm-53pJoxgibCKjrvqcWubJLUMaI4UvcShEpREXHLIBjymjp8_B_CP5jT1elT0Gl0gxLymCAnbh8ecRA0ahRMmU6U4a1ormekiDtS_oYZxhWoFiyV1SMSCVK0C7ipY_eWRc_vdidIQ0KwVH3TsF7n-OHGXJcEsqxDPNmpWkYBOow54hF8HP7tSbz1v_a18FknmnNPhUSLVkrH7RxC6VHVZmrM1IMvMv4o20R2UYFGy_P0zcJH_1K5epFtWgA8qbH7izwLKhdghF06p6RUblMx6BWG4WgYBBk_fD7fdUfqt8y9e35NDQTkG_kUpmYRmb76N6tFLVQ3OqjZCpi295dtXWiAQQPN_yxjG1MQBm0Cv1kj8HZoir_03ZNw_9XlbM7wnQOXbN4-Q7QBZGGR6P2l3FrcWrtctKvomkTOFK5B4drTsYuOovEe9L8NbywjgwrbzSqVBbKQqpwuMIUkn8g35IlT7tJkOM9Sd34vm4spC4hjqECdhoCTAcwX2FYwTllc3JI1sFsijccF5xJe-iCmJMAZaaakmRF-XuJ6dNiuns6wcCZzBGjrPwoqRCLtG3NUGpdDHtzN8lFaGwsRFmdvcolg=w2058-h1236')",
        'juices': "url('https://sinculpasite.files.wordpress.com/2022/07/bg-juices.jpeg')",
        'juices-mobile': "url('https://sinculpasite.files.wordpress.com/2022/07/juice-mobile.jpeg')",
        'postre': "url('https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'desert': "url('https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      },
    },
  },
  plugins: [],
}
