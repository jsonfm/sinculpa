const arepas: Product[] = [
    {
        "name": "Arepa sin culpa",
        "ingredients": "Huevo frito, poroto negro, queso, pollo, guisado.",
        "price": 3.50,
        "image": "https://cdn.vox-cdn.com/thumbor/2pllrrWb0RBDkxpUeDBFoPN__kE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22872590/VICTA_EATER_AT_HOME_VENEZUELAN_AREPAS__1.jpg",
        "category": {name: "arepa"},
    },
    {
        "name": "Reina Pepiada",
        "ingredients": "Pollo, aguacate, mayones, cebolla, perejil.",
        "price": 3.00,
        "image": "https://lh3.googleusercontent.com/fife/AAWUweVeeoBFySgh37yzf05qIUettoAuJIQ_BevPxhgjSu49rr23PwH7yy-0sU0IZVdpKHu6x0pNRn0nf8FD4A2TXk5xNfOmv-ERjxK3LsCDryvycpoC0912clAac5vCSoYEbw0w-zFDnEVjlrKx6Z-QtH4tV4JS1CnILRlaqqhITt3O6CIvaZolRUoOufriABdAo818kXpmgrM1Ds4qcbbwnCfVNoOg3rzSm-m_L9EQLTeTIfaeo007sleNrYe4pseobFvm7nXJqiYDG484F49Dt6_iZlD_iVbYebjdIATDVkcp0UveD-NH1oSaH3EGn1y9R5LwGdTeMVGoT8DC51wkKQtry8KE22c7VXtcZNnPU3zRL1RKVD_p0ZDDb7mfvc3zYuHPD8WI7JWonS2MxkPVePRCXSDyBb2kObPjlee5eylSMBMQCKbExGA8lmaxMvoZkg0G35c3CBMeHW_ucHUyt-SWgqItaIKD-x6C8z7PAoIV1YZP2SCBMcKEljHWuiRKKkKPw2VFdzaeXe94B4IJGVcmZISY7g7axsoqiLSjdJ9L5Pj_l_Sznm7ex1DUA7jQ3_zbeguQowOvP8oYn3FUhZXxaUUgDbPuKTFpzmFRD7WhgKV95levsdp5X931hJijALFptOVH40CEnFPHQBItTFja87pYFWSTcRL1T6M4sHzXNMqXdTl1RHcR0_txhWy03E-4R08RzLoStbGT1LqgiiRdgzZvC3PIM29HhlYYFTMW4ZHkhqRqUviwWQIjEi_7q0ficsmKYxu6PR74XCKRpcGDGzES_D-kOCHOSPXu7N_a2TerRdWyjYc1ts6oFhvDxKs4e6_gQJACDI5yc8mC-KTZcsPxs3VneSt9-j9_pLdsf2jALGNLXaSyC1yb1mP5iF42hbT5E3G_PoTHCTK9yHSrIqe-t0jSvMD5LT9PLHFNnQczufa4Fb-tp-mdwfgCmIfEqr1G3U5TDNrBtQQLkrXCyGH_afcobWI1o08Q4bpKPo6X5UDyvYm6M0u7UZ9fC6wdfBuDW0y6jcil45xfL5PaywC9zC5ejbhrzrcriidbd6gQ7jOX0oVf5DdQY-1qoaFIbN0_8ALM0IF2-jhfJsl_-dNzSPegxFl2UUG1qa-obMBDiMJH39IQreKJx8hLt2mrncowVHlCYlfYBE_iddRHPh4LlyQ2dYiwtIa3w3kHyJhCv5tOVVhZeJ9wq2V1SVXiJS1xrWjlelmMmAVszfbMLEPWXAR-yIIYcWPGvrX3-W7YnBNO9hCo_4CQgUjdS06wtdNW3g=w2000-h3556",
        "category": {name: "arepa"},
    },
    {
        "name": "Carne Mechada",
        "ingredients": "Carne Mechada guisada, queso fresco.",
        "price": 3.00,
        "image": "https://lh3.googleusercontent.com/fife/AAWUweW-gZLJEJVWk4lP5GwibGSgx66FCP73XiQNkb6wmVB3_uoY0Ix-QjBLkHTm3EV2M9X4QTbq7oGFjsrtHdJvgqkOP0bVwsijyYOsixwxmEq6jbFToRL01pOTj9x2ToKUhXgSFkWtcwE8QADpwvi-ucQxFBEAYnr7ijTAAZjUCDBS4jM2Q8HibKwThdwwHsuYXbY9OJs_AyP8_2on6qcPpW-q7AMbJgpo5DKgpvgP4SHkm6Ys9Z1IKWtGq_YyOAXDrXc2-1QMHnxghyruxOAVvCokW5Z5v9LhnuLc8KbfpEAomSwZl9O6JRZjf20nbBuY-o-1xj3j9IjXKQWkjeDXg9ehy4poNl6_GKI4BTGx-U-0km2u1NFOLtg6niL-yB2cl0oo2wG9ADmjB5b7Fin-4nCErnqxfZ9N0uzd3BlL_N399FCB_DFyhpWPlHZUMYwhcNFUtlAWGY4ByGXKw1OLq-UkXG0NB2JHJjRa-iMQtenb4DyXE0_8wOPKd9oesV7mDM6FVeeRYTNlDjCKgLgEcSg6XuZDLFIK6qbDAbecx2bJSBhnBSzfDM4sOLqJ5C5OX_0AQY8eI-TktmiDW7igQuKlvQZNGy0ui916f_Ea4m4ESRSz_LtfWW-q4-5K27664Wex__VBAL-ghpPwQ0qBM3uzwjCWQQLUoATX3KmI8XoikEcBAa63VhHWsuhdMkppOXKqdk1CRga-EDMJcAGzVQsBxJdklv29h27P7PRuyW8KTwnIeZR3maiHmOuYbD-gdnj6R0KSYWM62LmLCrZ4LqnMgPy8giTydbEpKMiZZYjp3bipmCMmnpnCHHs2bHEXN_Q8IkR4-W0_1Z7rF-QgnoVgxgtEk3UxZo2sn3xwW96Q0fd3GRiINCxcocx7fjvQ0hnx8llaQn9LmVxuayj7Xx5xEFGOUffiPr7Eb0t5BbD_Iwz3eWm2NuvJhQt3uQirVfkdCiDq38b69tI8ZUKisNQkawXF_xnHLD1Kj8zvix7-sdWoK6t9N3pTje1gGwUB9Jwe-kYW6pFbS2T8-7uFT0d14qftCh0pJ3GXO10jnD2ib7F2LxA-O6Pqi4HuX08Wl9-c8j5uPM2ArYpg9QVaWOHK5q1uQI-fbe5MHp7lQkCIRljo6L4CJp8M3QtoV_UNEDl0uWSgGeRCQ38pTLUyZmRxGV1CAiDV3CKlk_O2meqgNaNAk7zZCPwwX9g7LFLfG-caMRheBjsC9Qt447OmGk69Bc5OqOtBlkr9p3kMxVn9MrkmLHOx3I-PDibIpf4VtBNdWvXm5g=w1836-h1204",
        "category": {name: "arepa"},
    },
    {
        "name": "Pollo Mechado",
        "ingredients": "Pollo Mechado y queso fresco.",
        "price": 3.00,
        "image": "https://lh3.googleusercontent.com/fife/AAWUweUhiNeT396rQpShaLfmpCzkuumwlxoffdxQz7pSfFT1HMHVXbwA_FKzpX3P3JjDVMswOXeMBtVQwOvGEAXygqWLiWLE4tDQmGLNofLdDv3mQOwKTUyIKZipHkYZA196gpewtK_T4y-fNRz8-l-YmNpoa7dIkbY9eSNWj7lLUZ_lKvpPpw2BFuUpIWoSnCPJnoh9PQclLXRspWXwcVHFhQ399zUoKfizaOXC_-BxwG9vMZOHvbACi3npThJ4CeJovWlu5UptLQ6-IbDlPArS89WmgVGYJkg27oeNQsHexD7zlrZaTQymD0WNWHK4pBRDVjGAU2oIeoVOnVjfKODDCMmDD4YfDu7R1P-dLrb21kYb5NA63X80z0FsEZSb-15fRa9BEIadCuo4k7TtEOydjNYzgJaOgR6QgsEaR2A83LEVOQZ0ITcSSAlc7EBkRfn-ZIssDf71Gh7IB6VX9S6abH2v5S78roMKtJ0jQhoHtWhVC9h4zH-pw_4TQcnSuxJABeaG5CdpRktNXSOnEaJeN09lcDj2tQydeEZpyKzW50UcMYJT9zLrF56eAoBHzg-qsVsa1MBZFp3dkRZsmwBdYLk-o0Hj769Nq-ZoYkjA-TYO0y0W1aCb_Gw8Z5FkGuAS2-s5bT_vN3lxODLgKoF8QlZxlVyu29qaLMvYELBqDBz_Hb_eXmV-dOzK3EL4N_0F6Xiv_3F1R95zM8Bx8ofW2dRy52cFokDPu4ik5lh-VdWgYuCe6GVqE6DRjIOlAZSFbRkhFqBOu4RUpw1d_PW4JDbVmDcS7esKauZiih4Hphy-lpzOxoGOrzuPvjtx57uJcApY_oNWhjilcDD_rIHhHzqG8Say4yugLZDkwf1YG7hMJ0Ah06Q7Y_lcy5ThHrBZEhIU8y1uNFBKn64IJmhArzANh7UC1md32wLMG0O-O79dDbAdSMmQ97M0yIqaSWQ7ppVB_z3ix8mASgbc5AObTiA65-oLWYEzlp6DpxwqFx6PWJhUMWzqKf1Z5FPOcIX99o6mACMXplMZYpID3RCAOWPa7ko2f2hxaSaoBMshnEEli85zfpfHWQ3llN9e8pHZTAK7kuGijqjHIzim8cKsxh87Pz5pUHV45FOkE9eaqJiQChzTuijcGt23dVAa--1--TX0kB4Mn7_dGTC2s44M4saLQzRK0FApk4quG2sN82dkXrkusnKRL4_75mtCBxmLt1YqRowF0Xx13SKvEMX3SYYLhQs7ZGUERc80ukLxj-ZVUUC6HjRMfri3c99wRKXKO5YeKORLtA=w1836-h1204",
        "category": {name: "arepa"},
    },
    {
      "name": "Carne molida",
      "ingredients": "Carne mechada, Platano frito, queso mozzarella.",
      "price": 3.50,
      "image": "https://sinculpasite.files.wordpress.com/2022/07/carne-molida-1-1.jpeg",
      "category": {name: "arepa"},
    },
    {
        "name": "Domino",
        "ingredients": "Poroto negro y queso.",
        "price": 2.75,
        "image": "https://sinculpasite.files.wordpress.com/2022/07/dominofixed-e1658007290925.jpeg",
        "category": {name: "arepa"},
    },
    {
        "name": "Pabellón",
        "ingredients": "Carne mechada, queso, aguacate, poroto negro.",
        "price": 3.50,
        "image": "https://www.goya.com/media/4484/arepa-de-domino-venezuelan-corncake-filled-with-black-beans.jpg?quality=80",
        "category": {name: "arepa"},
    },
    {
        "name": "Cordon Blue",
        "ingredients": "Pollo, tocino y queso.",
        "price": 3.50,
        "image": "https://sinculpasite.files.wordpress.com/2022/07/cordon1-1.jpeg",
        "category": {name: "arepa"},
    },
    {
        "name": "Arepa Zai",
        "ingredients": "Carne mechada, Platano frito, queso mozzarella.",
        "price": 3.50,
        "image": "https://sinculpasite.files.wordpress.com/2022/07/arepazai.jpeg",
        "category": {name: "arepa"},
    },
    {
      "name": "Huevos pericos",
      "ingredients": "Carne mechada, Platano frito, queso mozzarella.",
      "price": 3.50,
      "image": "https://sinculpasite.files.wordpress.com/2022/07/huevospericos.jpeg",
      "category": {name: "arepa"},
    },
    {
        "name": "Picada de Arepas Venezolanas",
        "ingredients": "10 arepas mixtas.",
        "price": 10,
        "image": "https://sinculpasite.files.wordpress.com/2022/07/picadaarepas.jpeg",
        "category": {name: "arepa"},
    },

];

export { arepas };
