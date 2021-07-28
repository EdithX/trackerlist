/*  ░██████╗░██████╗░██╗░░░░░░░░██╗░██████╗░░░░█████╗░██████╗░░██████╗░
    ██╔════╝░██╔══██╗██║░░░░░░░░██║██╔════╝░░░██╔══██╗██╔══██╗██╔════╝░
    ██║░░██╗░██║░░██║██║░░░░░░░░██║╚█████╗░░░░██║░░██║██████╔╝██║░░██╗░
    ██║░░╚██╗██║░░██║██║░░░██╗░░██║░╚═══██╗░░░██║░░██║██╔══██╗██║░░╚██╗
    ╚██████╔╝██████╔╝██║██╗╚█████╔╝██████╔╝██╗╚█████╔╝██║░░██║╚██████╔╝
    ░╚═════╝░╚═════╝░╚═╝╚═╝░╚════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝░╚═════╝░
                             v 2.0.20
A Script Redesigned by Parveen Bhadoo from GOIndex at https://www.npmjs.com/package/@googledrive/index */

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.
const serviceaccounts = [
{
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "00e18372eecb77e94c0eb11dea82c39edf3cdb03",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3vfVGrYPf9XKU\naehsUF6t/lw6jm7EaHQfnXI0CV/HSTxwDvvAqeUkbx+GnsDPwNVpIBoG/PBGREeR\nd+xXuPWmbg8Z9MJh1CjogjFujh8B478CvKEss2YbkMTGPumCnwVykZxMx6rvXzn0\nALGEnREcLkCodcKuWNCE+QYSRKYdekCivLwlofZUe0ZZeCT0FtgO4v5ygrlDptTG\n9Ahd3riktxyamH8KFgclmZdNTc4GMpcvTro7+6pX9h3l64D+9//06LQ56/dVCboT\nOivlC/BCvJkekeqKV5S3ztU5qfQ8Otf5nnX2QN+50tMqodUfbDb0BC5MbzOSLFEr\n5eFt69pzAgMBAAECggEAWzzFkwNtFOPdsemHAmXEJdTEukToprmRU/OL9l/jQeNR\nUfl2tBwIztcpCeFBr8e6kNliYy7tJo8YFJk+b+7FeA91izd44DgH2jBv2ExVBEyx\nF+xPghFQ9gYkV6Z8sCJDg7jfKlcJP5SDA/DmNQoDKYGkFKJo+cbbP/QhuieBbufh\nuhUgDritgdNtPh0ukJ5NTdQwVj8LJeAbEn7FkHuJYrPlar0sHFhUj5I8zFMpBsd+\nDwrrfJ2Y6UhfJLzCM0krzh35BlDKAGLQh+srvtYSEeKooepAD2VvTTYHfBJIBpfK\n/Sm0HVWWOMKcibuUoQOdMam1+ThkgBhSl7KzYq/EtQKBgQDwBqXahoNGYh9xp+c+\nkG4p++iqXNgpOzpwx9CJ382ns1f/J2/H6Z9AhvPazxpBFsJC04nIhrer8mfj402w\n0CeiZoDdkoYV2A0lFrTxnBzvhU4TmZHb5SvjzgM8UQwTu1TrT/U1x5rLCIC2XdG7\nd4lLSTmV+bkN5+TKALFOOd2dTwKBgQDD+GTKmN0yHKp/JMUB1GaQwRAH/Lvgv8jq\nGjF3/htveW4/34h2GuEOCqtxz4HfNoJ/sQo1rO8l3lVwHLX64fM1wrhyYSqGSPZM\nFJ1FUFlvbocOtYrPIv5dqtkKMwBj3JDHf0YxHQahrP/VQBLrpqZBYDtu1sQOuuYp\nQrlsE1lPnQKBgQCDMU8D41Pra4R+TeSyKKVeI0dnnrmzx6DIth6AzagNypQFbZvG\nbCZUUa8F4P8bpoHlntQHm8LWo/cu8zWquAuB038KHKVXWTDOHdwm10pljLpBMkYs\nJ9XWfOr909rDCjh/KcQAcipkYTBg/WS+j7amRM7J76W7OQ2vb7N561z7NwKBgEe2\nJ7vzgE4MK1/nZqgqv3WNEH67v0yZIb54401TkVqThwKcm+UMJPrscJxvIMk7uzla\n4a+OntyupXknKHisIkG0BablY5hMLsTcbkilBHVAbu+1AxyVY5uHH3EaBLSGS/yU\n2Gy0gG69TckNb18IVqJpwpXmxUvWnM7QeeXQlsgJAoGAWcDBtDJUWADhef4EUjkE\n9K2sD57tpBv6ghQ/rWNcPIkGzCltAm7ug1tJL8q/Ebi++bfTQ8ePs/2CMXG9Wt7n\n2oD0i2orWI1RT1ZeRYsy8OihR8OMSQO2OQZs0EJeeTG/8RT0CD1W1bYlZJGWFaM6\nOjpLtwOsDjAXS1i8Vnu7Vr4=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-t3s55htzh-fdhyl0x1c-wawt0j@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "112639646630058990784",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-t3s55htzh-fdhyl0x1c-wawt0j%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "0e750f8c8dd5a736fd060a35fb69625ad5ac9591",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5q+3pimeFvJI2\nDkdhvYpWBfI4YkrRFilbB2HWphTOfywzYkNYDF7INRgYofdAz2OKAIf6FwSSV2DJ\noOn2un605a58AwFKNzv0VpZ8QkSV6hv7+QoUYoVWudSCeYp4s55ansxJwe63jjA9\nYB65tey5D17mMnLfISUGtYZ+BLPawgJ/kzy3DYqWoP5CcIQUd2t90YDSX+xNUur0\nfwqanJigNJ11hmG6HyV/ZOW5M6mbEGH42kiZKi1uP0iZOaLw666MwgBMhqtqeX3v\nH+lAmFnQp8mtdenZEKMVz7WtyurU+LG/cfvWVbVUlL+sH3AqEa/XCEmUQZwMXyXZ\nLOUmggqXAgMBAAECggEACgPTFmjHwrf0LwRAJ26A2rkBYrcyj+qhGm7ggSJ+NtE3\nQiJHvaUVK7lpblK2MoG9PcFflEbPkVEzQEz0scFHelx1N+01kZo/GqPdBCDS8D8r\neUDqoUTbKl1lsA/8Pxx5KywrmsLiLHZ39aeMoLnGZgkFNmd8OLrh82WxNnTsep0q\noyqrTES1nTxSbxOgsXAIRAQmSQr8nIbpfwyQ5SczLm/2EM08yZruYnLrpp9RAhXE\nrMSL2/weafdNr5Bd9p1h7xtmpIaOzzpAree8OKCLioztXN2y6c/rmYz2ThiwKSyR\nm2LjNBJegOhSSS5+PTgegtLLpig+E50cBSJ8sOlxqQKBgQD6yNw60N+pO9FB9BxP\nafNk0TxsBEE6SPGOwSQlHADbcDqBZ7/QKSEleWlY+XASE6qWR7id0mTLE7KSWSaQ\nT3uQrESRLGya9XKb0Gy0hrjjZfgBdoCuJaTl1bhjO+VG1w7SqUAsQ9wNiSPyjqv3\naBx70LmTMVq0kDH5IHNxYeRmcwKBgQC9iGrKEaFAccXWkKjzxjMVXyMAAc6gF62d\nhmouS7Du9x41x5R8EcXgWVB9W2TlIfSM3bmzbaAPSImyD0Kvordoy3bcsz31rYJK\nm885C4FzcM7tq4wrcSt5XCYbHODFGN91gOdk5wTNbq9bYZzv6D3JSJ7rCcMvVbVr\ntUi1fsteTQKBgGfvQN6bXGaN5O7ZlbYP6hCZato1dTcLrhkE0M8UaQKI46Zn8iX6\nNcOLKu72Cc1kGynHNasq3B0R38spaYMbfdF6o7wq1iPun34WBkdXIl8UDpHEpBYI\ngevDBHUUCLSwQnNqM69kvFlbwesv1/NkUZG68n4fUUFOFXfzTATsljUjAoGAduSX\nULDkfX+hQiq2wUzoiJSIaR25FzYjQ7io7OewUwcTnVrYK0ge39BHLIvja9T0ClWg\ngwzWph+zuM3X4ENrWEKiCmoqCO5R2CmLQVaVWuw98lt1b17rjZKfmMxxt1IWAyjc\nfrBok9HGEMXX46rE73otrnUOSqgySSGMPcYPHtUCgYEAstGBHTSOc/HHRZg9ilfP\n/RYttDauYaOu6TwAOhCbZoPbkHaabOeBPyvvWR6qJFFReT5DVAk0mdZbJH0CyVMw\nL6uF8syd7Izsd8qhfJ7GjWEhjg365F7+lVWxQ3sjKEXkwfbyNKaqZvmuobTQUiHq\nHnl4BZBUnbWB/2p707E8mjI=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-027zgzmg42cn9cvx4-sig1zycu@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "103967735077592963742",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-027zgzmg42cn9cvx4-sig1zycu%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "3c598e82beecdb8cfbdcaed7868a24cf7640d8d5",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDH8gaJhUk9BhfN\n4PIjlDPfxzvB+xMOiaG7btMe1pvEdPjIxvQ459n0h7VOKr+Xsc/jL4QoQFMDfis9\nD1lfAdBNQGP6hAwm7P+ZChUGbXht96Lbu1bg53566fmnT42IsF+uQSReXFhBQQ7V\nkDMet1c7+Hluz2GkOBwmhK2FcdaWWsBi4wiIO3Wso5VaGoKcR0OSGQFEV7mCwrMZ\nb00VEDREAeeUhFXujn17WRpztI2XW06scm2iKaw+VcFfrcXgzN7cSxLKwqr3NfhO\n3F8REMBSygnZSCZKLyVPlPiP4Wde8kgNa4jcTNO1yI/Ual3uEK4q3MKIWbxS8MAu\nOLe+MpwDAgMBAAECggEAKg2lglceSE93wj2FsCYDoxVsZChCodQgyCNPFDVfHbrc\neJ4fz7g0B1Jjt8UV9vnXF5lu2mhtDVcEERuhWHIxNY5NeOs9AxLlz3JnaaqsobRr\n9Hs6kqMd3wxHDgGVayJtfWEGHTKe/VqJnDFwDw3QszRXlg7YIooKoa9WL7L5xzV/\n5Vgyg0IHVB4g8F9193QMl9YUUpbpydFzENIYsfX0n+UwjM0NOxtJLwnPI/pC/osw\nIdTAMxmSRZ0peNQJ8d+WVgWwah+WOLDQmMKOEFt+2gO+FKqJtX5pmYLveFrQxj/3\nT3Ful7s+AgcV2ymTnvBCBkoLm+bOGhuSk5ju2ADWAQKBgQDuNlOv7JRVkJOXkUNM\nfKQ1WBclGejPePHJOtY5eFGE5eFLU2t93r/YcA4Uqnr5uQOmHAAokbvm480ypRTu\nd+D2trFHl2QDBo2LydDTb8JFsx5BUxPTYpynqPDZjO9p8hDmQrfdXQqjgJJKw2oh\n4EqMxpjg0RfkkhlXQDWHdK6/owKBgQDW4DBoSwoHxvl2TyXXDcUnQ51+Gnmt2cPl\nhMLMhEEpr/XPxh5zxMQEF0W1JjVvv8TjTtUvX+KaIe+KAwAzRRXzVapQoJMZALjk\nZJi3aBM2BuJ1UBxIzPl45dnjXt9ljwojQFyjv9sd+8Qp+8PJMYJcZ3VSrF28/gZG\nB4CxFkL4IQKBgH6xlkDy6tG3W0g5kjmT8SIOAAFTjmcKRE5qZJWcUH8GZJTTgVAo\nsJBEyLhlE5LNvAsUyWDKYc2jSvespT1PtO6CrDcPZbnWOmImrFJIFmNLqMPFk73R\nrM/fInoSYyNOA37z7SZm3cmoECaDWGc8C2pkFds8WiDPM3scQ1wPywFRAoGAfssr\nxV8CPDSdX8K0gYIOpGyxsofM5VlqzzTX/fbMvNyoIEK4FXg2cnOJHqu9PIPcmoUa\nJypdfLYpszayF47ctQoHxiv6oPZcI+l4dEFllKvbVX5AMnVBgKWhPRnumO8e/E4u\nXDIKCldWGbAGh+I/GmeyQ2aSqcL70Lb8qYKJYgECgYBHoVT9X2uhWZ+ukY18o9tL\nxoacawHKZADnlymbRY/C/BcjTGX3LObrYBgm6/jJVDY6Hl6okUka6VRyj1+T8cvz\nq5RzDrS3flSopo9NiAHMomwA0UfwSfkZz4D5inTYOGvAYcd2l6CKxhRyzyGhgI8P\nAwvjVvz8hIkfXBgtJXDbaA==\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-iouy7p427yhfgiarc36bdcl9tz@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "111494882069907971325",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-iouy7p427yhfgiarc36bdcl9tz%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "4b9a5e4936ed3387246afef5d018aeb5fb5ff160",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDpVRfQkqcYi9n/\nzHgG9W3kSKT2Ge6UcFIxA7DNFEF2aFUD8b6mGNe5bSbk6gKkc9/48+VO5Z3c7QTM\nrHF9USp4cBzoE4E1pJxNozlD3lMgROB6Z9JRE3TCOpcgGs5STscW6htP3Hq1j/9M\npQHafux7i6RuJ9k/80+SJBbTK/akzp7mKYMNI5lBIIci1t3WIyXlToCUjKIF/sRB\nPWDlNsfQuH+mJgTAf5SCEJOWkRqu1BPbqeQ3Y3WSObR5NWbQ+EnP8ogVmxfPRga5\nSQTz8M7czoALiwW19AQVYHvWayDV0mhklf61CvhumHhenSWfRnRb34Pqhf1XEMI1\nbnhsU5ezAgMBAAECggEABVlJr3f9KUc4xcVhJv+vTOFhbrF6J6BKMgzHRnGQF+/H\nqyHP4KzccnK5xoZFbeb+G7iI6X3Cragn860sTiwd0Mmjz/91Ic6r3+0S81GrDtKl\nYV5J6Ek4OaTwMUXhXupRZAlqe4fZWZolxxMCmjNN+9MKqj/IRNAGDe/n2gq9n6+A\nUtsSkLIsER1DSFAhuxTcevmqOCvFTKm3l8zoaBm8EAFn05DnjNT55qrot11NT+sz\nuJPj2Y7yXPKC1AJPRxIvnTS4uR6gb+t6dXNMt0oUxffOJdMCd6H5jxp+xkiEgMpi\nbksz/0ZIz2fn+HnuR3B6RLPrmg4A91u6fzOijCqOoQKBgQD6p0my07TeaoNWUAlX\nefKDedHfn8EOqvge6QDbYZY2sD0WzJJXqjleLwez2fvPaJ5IFxllQ+htJd6mRja2\nniVH2r+fB/v9Oif/+wcEA7sswPgXXSEM80X5l1gaU+vFkUv16Fqoj9ruM5BYbl6x\naEBTnvZ90onmC+5ng5uxQoIm0QKBgQDuTzjcluoHBA4Zb+Y5wbSLC8DQIO5QbW0v\nHIKxFCkWbNsXHmh86IRXNzwZdMjA7WZr+50W7gFvtGZ0Ll7cClwtg4plMH6E4HL+\nAg/gk0L4fnVRLBYys37dJvLCu7PgaZQKpuUBxZnm1v9ewGC/El9MN2WXnvQFkRuQ\nGVknatY/QwKBgQCYz/KDfsRvMPq/XW5EkYlDlLpaHphhq+Q3XBB0r0sYLlwgETpL\nDfGJtRx6DrSRX5PYGZUXAs6p9IOIVZg3v7S02O0oNILxgEowqsc9MFUl1MOr4tAq\niAoqP5Wr/2vneEyaMD1NNN7hiDhBYZCDki5djLV0Qi5mPPHs0/TQnd6hcQKBgDV+\nNP5XJeszPtL46k32rEc1+S7+5V/KYGLd3HxRUTPGdZuH6N549xP4wxXXwCSGZaJB\nla6K+GmRrhnQOtzbuntA9rTmINBE7asU3WmExNiw0jbJVaZF4mlUD9QkfCkYqfGG\nKwutxnEpu6MSPeVGA3xBRx20wYPqYayD9B5D/hmvAoGAVBxfm6QViB0XGfMtzulc\n6tVsZAUu0iKsogLB78Ql5iJ0668iHb049t+FcvCjy+PXXDLGiQ3LfrgW7uV9YAlO\njkNeo9yP1TWfDLDFKy+2mp5q3mEMBfo/sd4sZuvisknF687egOUMvQtjxUpIasLA\nazWKwBuNM7vzdCz0UeoVMic=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-8fj79wyf9ww7vg9co7pcuwz7gh@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "112722398791028506303",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-8fj79wyf9ww7vg9co7pcuwz7gh%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "4f2ebb6eca3d0884550c2436404c1c9703295bf7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7mh1HVrPp9VRk\n+CDp4FZYlKSKwEFRkz8FPT+LzTTodoqm9TnPJcmDj0Ru7Ksym0wv8lgkDdJ5Fw2d\ntyL4CzmGGuOuQo2GoitKwNOydhIvcjNrwNlPizGkmcqMM/Esezi++0TmPIWUdeRz\njGOsaMWlDaL8smLVWvrkh0Nrr7pVwI7myh+42sEWKcqFmun7VN9Z2k7hrilWbP84\n+Ro4OOw89zBmE4u84bNuvIpEZgoDnz7ZBJCqCD8tEF5Wnn5zsLyBD3WTSylkylN3\nNLUAdYsk3pa9h9vfpRKgzH00gnBwKZTcVHzithJ8mYo8Pir8UjPtkSSkS8rEcJ7V\nthMyZYVpAgMBAAECggEARKAAJNf5EVTObe78b0FCpL2fIShp3HLeI0b/516GA6FV\nX/SllHqQqADw+hi2GVmIuaNPjcTGoMgHkZFsB8tnXACbF+Q9jCnnZz15UzdwuI1w\ndPLDK59R5hHh736SswBSRj55OjWaca/chU4uKePbpOCDpieFEuHolE9MoOhT48je\nnlyi9wUYDFToafjgyDHZo+FVJ5dUwrPVcpvhFVEuZRHOpBsH3k/vVBp+cw4lQFSU\nfcdOqnMRXX6C2vzcKCx86+RBKetJ7nTQeGm70hZxCdcg2fTzWGvCaDA5jSsnCQxf\nep7YoUE6cGwpx+9IALj/qRUux8FnI6FfUvtyzNPuTwKBgQD3MgFnKFkFkWk1cua4\nuqJoGX/1XAFRf4bjX6uWJmbpIJNbPDJT311cwYK2fw1dn21fhceAT39lCWr7UZ3x\nMNhhcEWG0bZ8eCGyskcNJLdhCZZHnwHiBiHr1NMgkuevfE8pMBZhk7VxTQJdcsGG\n3yZQn8a823nVWpZHXXa6sq3XRwKBgQDCSLh/NBbk0B2vZu6zyRChVosFkEjMWVym\nE6V6Rn6OyE4+cYUKxDokpc5mwQVFeQDrO68a5VjAwt+0FcaVDlfL+F7haV3VIFAo\nY3l803rxNs3tMmXnxF4rJhfv4gv8ZFzHDyM+CgmDFOuEPhmt26X98hzHzkkaywbY\nOg2eUod1zwKBgFdxUfu60xrcIFpu5dzs8GxgsNoLjM/Wi9G80wbPWNIY2ueIOMlg\nlzcroOCLux+mONt0iGkENi14kmaKrZNXUwPM4ltZrfMDz+/VjrrAhToHWSjGv7TD\ntJYm9/Rq4xg5ogsQ3qnvxVxqAG8sG/do0rXsfzHpdYSagdSG5GwQrtwbAoGBAJpa\nMhIFbUbePSdUTMKTNF4ppouGBQAs4tmi9C4AAZ4ob1lW0Q8rtNHW1PN32FtIdj1t\nDoH8whVq/VVSk5FqcsA/FApbrsubP3PHDAbq8VrgYpxXFPUcYoA/ZHcVjNY5Wihf\n02z/hm0Y2sAWokopHmhxyQHI1vWtZUO2Y4lsIeirAoGBAN6cld3j5GyVId8ifgeS\n++Mth1+bWiHBGeZjMqFpHMggJtzOikFlqpHEFCxXnUaXSLWRIpADOkcA+gIDV/Oi\nLS1+TYDoSlWGDXqR+GPRmzYCMvCdIuKra2v7yjKhyJHyp7K3EpbX8paEIU7XGmfY\nLqwqkkqetXdPpBr5ZxsmzxOw\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-igre9ly4m73zxu9pgwpwklu5i6@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "100642020739651843495",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-igre9ly4m73zxu9pgwpwklu5i6%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "5a0f1fa1aa67b3789431a7ec5cb1a180b7d00481",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDF/y8CiJe7QHUP\nPWZ4FVyw52mL0bUjdCvtyo7dPiqXJ4MJjaJZ4NJ3g57GBCCDWkA2L4JsFdB5QJ65\nh+9snt7uhjMCfyFb+MznHwTdvJn4+2y1feRXmD/1d2RRVXVNDQJNgB/RvSI+XMgQ\nF9AfqesE/9FJx+R2aBNeb9qgFRWAheOtWgwCg0LQ6EnxmbgtCykGz7lXd5RIw0Xw\nmfOyiWeYPgd+WAd7mhwbniqCWHQ5Nf1M++ZsUYDCqNHoqZz6sbiRkALQjjZF7r8A\napKA4RzSJ/3mwcQOoeADxpY8SMus/QWFkBOwJ8Mq18QX/HRpm4iA0uSYjtCjGyUS\npKC6YaxDAgMBAAECggEAIXOePSbXv9bBkEwW4mX1jZvjbLCHEpDflSLaZU3KA1S1\nImmQCvBdjrypmBn9ZkPawmzfc6Rx3vKIfp8VV/w1fQYmWx8ggznzYH8Qoufo+bR8\n5uL4r8X01GOSCt3N3jE6+N4TQivau7+QO4vSaW8bWnJgKT+A/XJTB2sNfGtjgR2R\nsTDuaI6/kKZ3ydtnJm6ahApC6PqsuhGGbhiLIt4EEevhX8sDsBI2/QV+00JJLDdW\n5kzUJZHwO5tWpfh2P+wHjHb5ndx59UVAIxnPO1tk9gPi/7Qw3/SDOkYtmTLCMcJ3\nggS4aBz9l6zcerD+6qgrDh9QAIh02mORMKebrQmRqQKBgQDskdxYwBbMrXCCNgtr\nERrNzogOQDsOe3o1jFCxSQQsLCY4aBjtTekwwPnRMGfuMsaw+JakZ+U2Zo1bew8p\nyE6GspvtUS/8H9P4VbkHkb6lxc4PdzndujapW0V93WgDOOwHx2HQEiiWigqURGB1\n0EayfGcl0kyPz1w+YMCgePCqCQKBgQDWQki6rm0+pu3tNAUd0f6B1sxVgVhjtJBe\nAQIOEd4hnB13cfqhvh1USrZi5ceu2wmfr9TKqS02DyBeqjL+L/zyHd/6nMNwzLR4\nfR/jb1h3gE2ndzbHugMfGoBVzeHTb2RwGLELzAUrV1N9RFg/2kNOTkI9xy9APbsw\nQjlaiYZm6wKBgQCpi2vpK1nrvM2qdINAa5TTNRarZ/srSPFwGSznshXMdqO5v1lG\nEZVzfIpOEywZOcjOooqML23FzD+49XwLjORCgxVfQtVqE4F+NCmUtC53bkldKiyN\nrVxpieFG8HwP+yal+I4waiMuqKYmVs7vAKL6XlAqegqm8o0Ao6TKHYMVyQKBgGP4\nq5zHVFveYbfDBPwkBn+orNDcuFRVZOMnz0CnX6EJCcq42PvtDBxPfAhrNJ/GvhfP\nYBdrlpfZuP3SplZqJ7kE7YQu7xZLvY1WvLFPO9UOfa0898d7aIdzwxvGI6+XEyMm\nsj1R5buSVHdnk1G/0pXP+CKBNO/hndznmYFAGAEfAoGAFN7vLrkA21kkYh0VFih8\n6zAgxG09zE9G9xjfusedZKltGtEKYBWQKWkkO/y45GHOq33LbsSsDczA+lGP+XDU\n/rZ4FTReHbOIEUc7bvk9StLBxlQ5pEctz6OgEKIkub6CFt3lpnxrLk6CDbj0IR1z\nTcKWUoe2n3DFk3+ilN2VOVA=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-ay16t6v-rb0ustpxps-9blipio@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "105992229272885585261",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-ay16t6v-rb0ustpxps-9blipio%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "06e0b0302c73b448dd480a23357a82c9c62e6cf7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDD0qrlwbas4sJ5\n2QL44JPJAUXK1sNJ2g/MHFi+X80qquj/U/rUKgWD0rd8lMqfm9/u3CZDBI1/163Q\n1tb+Qid0SLx7mD4X02Wue0nm2WXRsAEpOLnbg1lEvMc3zeGHfwEvbErUkrQyg/8l\nUMO/1VyERNARTfIY6XLUOSxVVtkYj/ol4ehHppW4MUt8VMVmcHt4hl+1jdKk/7un\nP51eP5mepUjY0arf3MXZZgxaiHofxhWJAGH+y+C1d7ApOJnbcvsboaOsMh++bI+8\nszG1ytZDL9wIc+nyS/LtxnweYaV4umkPH39DQPLezJWHHewyd9ch0VLA81U5Ibb8\niDbjwGJNAgMBAAECggEABGL7PhNbufEiEldL3qX7plSREWBECd4vKjWpjUL/7+IN\nPyIzK76KcHxvbNFRqq3aU3NhQT4TkP1Hx2mQpMVEzsrBIiZ0Bm+cLWjvBZNYJkOo\nx8yEAu7x0hbfTzI2+6SOMvEPlt+q1rjbP3HZBYdl8tz7XKMTQ2Vmk53f26q+Fg07\n8AnKTg1WIyDIqKySWSKbwSWsFTJfPC5gitIoWn49jmFC37UrXPVpWg11YXj3/frF\n5pQ7D5ipo2IY2OoTD/wcQ7kOwp/iaL+9NM/D2Vdecv6rM8jQHVgOu/uJpbll9a24\nGq79+gXEaU0Xs4pVq50Dfrvb+fXNGe8GYvANEJ4/BwKBgQD4fM21vivGGS3IZRRF\nQ2rN2xlbem4Mse2mo+V/Cq6PKwRDlT6A3vdsTTP2r3FSLW5rQ4iL+j37WT99QQoG\nYa5LEgdIf4fbbrj61zoHkgcoKA7YHrzhsMNIU0VSF33+de8PurBpmMEJp7CBhOJ8\nfJ6X3dvk/KJFPdFwpal9v8SH/wKBgQDJvkK2kQFpuPl4aLJ8URmBpTLFIUokDOkv\n4ncEUXmhj8CtfS5LD2QQ+qAk9KIar4uh3/V704iJXpFDqZPW90VQxUdorJimKi9c\nX2JGqpaJO2KdnYKq5zHrKujOtp3RZ9BAexxnJh+4RhIEK3K6lCCVHpSmGqLeVL72\n6wMzttK1swKBgQCPECvPi2Hgd/an/aoiBqKjSpXa2S4rGPXej1Y+QoQl4Xpe/rox\nsC17qSdVy8TOr2F3WDZxgO3WnJe1IZEIA405o3OWBfbOG31czjWWzjhYoleJjojo\n18BXD7pFfUkJDBVLVQzkfxIE4Qr6RuuvCIC2pwFHYTx76Q+Ab6CZyaL5OQKBgQCr\nAZuLJV8NPr44Uob42cXFH0Lp1k4CQO9op447GtT/Hds1M+cJuQIZYlhc+wBtnl+9\n1xk+3Q/fYUnBEP1AOlmHHbJqB+Nc9mUu56tmOzNfH/d3owwf0dl+feDZV/JujpD4\nF2L8DFTW3o5m+m1FuknkHQfjxLBJxYwZwRv1ugLiAQKBgBDOaED08/gTLM3LLVE+\nxnY3NIWvK97j4x9PcC68+Kdfy9az1zlANe6isl46eMP4bnicMTzgO0BeOZHZLIuM\nKuTIPReHPDp6YpCjZ8Sb9JPjVDJX1nN3zZyWIcRWPNKPSlk3seYrQbMgvvqC891Y\ncQgSbQn9IWC6LMc5Pso41OdQ\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-n37kh4t7526j9taswukix3t4iv@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "117363815138813371853",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-n37kh4t7526j9taswukix3t4iv%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "6fb8038ec44fbb6c9a94cb2d2d8fa7fcdb0c37a0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRzry0XQTSP8D1\ncuu410bwXHodcFfnF9rtK80Nbv9JMLmKYZOiMmSNmo2xi0jhctMGHvdb1iNKU/SW\nEwp2OrQZ4Ft7XhwfGoCn8vGi9MLkYS3Xte+bGaGev1LVC1kyAAO0IDjJdJMQh2O0\nbOglhtopcfMMtMpCp996CzJfj5/sCoKMIma4+W2K51nvMuPeBb98aGx7Cjazuq2K\nxVDwYkJPFMsYGnBxP3iZ29cAGbFVgkqeG1DK+epfTRRAfhV2iGQGHA3pB5D53UE6\nbn1ydE7eOhBB7v5B2ndoa/TS6vHGyaB7AMN8p9pGSYU8UltmNQc/nbejazehaHeP\nYvlNZPnfAgMBAAECggEACJdTVBdFAPRjtLKkQ/xfQCtawKBNdZ7Yte/GQbvgC9p0\nnDw6nCx280b/gU4RKcN/vpUVgxI/exIuT6dojuXPldS73y2A365KlVrBtRXR4+37\n6wFb0Fo2xSlFwqrMAx+wGC1r2ybkwW0QyWE/XnKvKRD/PqjqX/oPN1wwiCPoytoO\n6X2r/RZnESrdobehgAkqEa5ORcYWu0nB3VyDBmfUyv5+vNG9Cj9vnv3MQgoa7rY/\n9p+iIXkNT399s9q+MeX0hOOaq6cT41Y9l2oxMPMfbQDwDfIgqHeUFf7ePoMl1vrl\nKK0DfnCW4q6ZQp/37QX/gbwYb5lyYJzDuXedsue4bQKBgQDChdI9O2Gp2Rq2z7As\nXfca28icnHfr8pWgUPpODFf4ppAdu4PQxcxzuPTiiPdwzKjtiXaZCXswTBCUxxBC\nNbJH3z33rUy6nfP67FySAWQPLfzbXsB+/IGtGktB/t0rGNd2KZRun+wsDzEb1khb\ndDAXHzhdbyfaxCxIIq/fJ1S28wKBgQC/44kcer/UbfNM/+/CKanM+n7/skMaCRN5\nJZ095jROT39bsqy1nUv6znG6Xj+45/iTv+lRFxqAoHV3MpiMo6PME8QpTzRJuAUw\nlTgqR8YSiGeQx9sXLkKk4GDsSAMDTFfrbp1pe7REW0K2SVnh6gCo8WK47W8nB0HM\nTCi7gq8EZQKBgAxDq7G4oLu4uHp2NcFWW1ISMV/ObbEupkhpUp7BIHrI5aU6QWFU\nV0OkkawGvrMZ9Dylwhh8BIxS/2ih9GB4SjlF1f5bqs7JTqyvYlbCR7C9UYfzPWfE\nO9jSI5SRoRgqhMsqa/Vdl+JfQtVieUVq2e1bRo59h6G/ZJtXtIb5T9oJAoGANBRS\nMzuRcttAjGZuMRlTr4FRFJ7SHW/XLCssSQ+ApLxoyX9t5oDBjVmYfkd0LgAvdBJD\nBbIqjDyAhRBjXNBQ9WNr+vY3L8bVCcGGE9uVA5Sn3yCO8vSoO812IMrOnoeK2SgV\navqbC25lZcn0rh7vfOq+q4gtgb8zeXo2F+Y5EA0CgYEAvBPsw9IrXJQTjUytXX9F\n/Psi7MWUrgRFjIhPgP0f9hbKQNQS7iN8P3cDnUd96lB2eMUwsQ7V/sIwhqbFycwx\nyWCmTl89NinxEqc+BkwK207aFQD+lGT/oewo782s5543i3EFRO2XGlqJWxEqvGIa\nOdry3RkSc2+6mvd/b9osdLc=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-fkjq00gvtb2z2iql3kod68hqkf@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "100878790982263724105",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-fkjq00gvtb2z2iql3kod68hqkf%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "8adc2f6eb95e9aeaac5f46af5b3438c211f21f9f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2E1Mcq40U9+Ce\nwFZAHznDSXElYFL89xGrj3kGSFghoEEXPXzV8Cxtx/lFj4Y6q3Oh+QOo3meIMlH0\nGG2jSKsDnXkSQJMijcyhbQAFNpZhx4GQlOeyzvzsVCeP5dxjnu5UbeNWuWikhyqQ\ngl1QZrD11+OXQs72N07v0bPEm5LAHqZ4hquCPfvDAW592l7FCiX2txkd4fT60mcP\nqsL3XZxH01QOXkc1CPxRmFmVjdv9ha0GAMliEhBwOz8Jp3v8gJXyS6sWDDdbd511\nGIQLJrnxlTjiTQKEDP2BnNpJsPKde8Q9YIOGoEs4EvQkx98yjq1Q/HX5mZXkWBgX\nF7ALijhrAgMBAAECggEAArUV2srIPcQT0Hh+r9RnCPraFlqw0TchSaJIA+pmeRWH\ncj+FUC8Skg1TrQ+dyNiMzx9DSSsJchKBenY0hyWI+XRJfRZ9uZlPLiVPR0SRBuIv\nEIXOTi/ave7gabjaxpZx58p8g2kdX7jszppJpezo+7bamQCy0CFxaIp/OFCx5W5o\nzRcxnb1MJx8L/K/0DUq0f6lGu/6q+NEgXpMvpW7YaLKVchjbnSil1FkLHM556JfP\nomXJx8WJCD1YUG6eLizgTPIBNjaoqPN38vW728dx82wuF2w9jh6O7Vn+c5cD97Lb\nHYbnOqE4Fo/8xAXLJ/jOHhKRh5EoLOFU2DbDTV4pBQKBgQDqUZMcxuF8oMG8l2Qr\nj04PHdEHydLjiHMAHpgWyLjfAE2Xi17NlmW5tYbIXFLmjScv+77j5BLWklpMkuLF\nhOVn0gHBUfQ16yws3UJhPudmfUf8twKCQWymBmnB6ASyWOSqf8ps8nBNW1MJVPO5\n2GLU967RlYD3WNP6CNOZScpw5wKBgQDG7D1SVCSzkERlIXQJHRrY4q17yBDqcKOn\npOAtItMEEMBpc4ziCcAHX0mIVMpV9mtNCu87HcQrm9ebcBZh7rmo2nZEmjowkHEI\nMGqbxGsBQ6sDyw5ZSUub8B8M7p6TWxjsMW58GnCwjg0yIcZwSHMDVQ0fbgeckKMO\ni2npzQ4X3QKBgQCv0KGHmBqcvqpfbWC15oL1iLPNGjxoiXtwfYQ0pEtC2CFgMizi\nKZUOcQw+zjdN0l+y+zvSFtGjupCSoCwTdJIFAmhau7l3s4uj5ijmeqJ6HkqjblYt\nkhWJxYoY+pR7lYOOAvDKKmblRD7b46g0rA4MKgQ8MedgsH/tPi42+E0zxQKBgQC4\nvfQhftXrEgQDLDN4t1gUr0jRGbhkEqJa8qvkH2B8eRZJmS/xSX7XGe7Pt3eGqGl0\nzr/pVja3DXALAuk2oKA6qlGGWvnJ2ouvQE/yRFPgg7jSuAWmdITM2Q/tUbtiPQuD\naFEk3uVjgznMIkQKSa7PHHEojGZzSHy26FE/+tmo3QKBgEetQnmkFJsfCBn+BVn4\ntxvdQBH/EeIQvQp2bJx+KqBaN0aBfneVU/JvDwPFzJOA4l5CDLh1BFf6n2RvsFPA\nKHGwMHa8h/GJKPxUUtG7koFZoDncMNVV+7gROwE5NRswe1HWFUF1T9Sh43QWuLTG\nj0xAPPxYuh8N5yZWOT4Yrv92\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-va5e4u95zt29urnb0kyg-zsqza@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "103615333314075453857",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-va5e4u95zt29urnb0kyg-zsqza%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "8b8dfe70c5c2254c24ac34ac850aeae2b180ccf0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC0a1PTY6IydtiL\nkW7R/QpJakAEvyvhtHvwx1Jf9oYgculkAGZX0Gv6CG/gvCbjXakE10l6vx4lbFHb\n3qej0+KBN5tP21XxattVdPK1ZxL9KmzM+cVHb+x3mHYL9FE1mQS5/xwTn28EmiTg\nTN0FboURE9SsWsEls3lHcCbY6w/RcIKs0LiPooZwq7TeH6GI62wNQCsqCCyTWQ7Z\ns3wd/RMmP1hkVol1ofHG3AkxrxOlNiOr+M46uGbrUOV1qbr3jl79+p+muiHm7sfy\nQ9O38HmzAfRS4FnooRVzZTQ2ls07Y+qvbSO7uQSjsgWT1UIXCTZlffTRUAfSUccH\nmGmlmuDJAgMBAAECggEAFAFBkHMf+TX90U3tKooC8bx/ADe9Ux+6zWoge2T/nsn3\nEIBN2MdSrazxUMs0CappMxD3BA38dvxRgE5qKqt0Fk1W4o4os6XcT5ex0MTu0VT6\nrui0A/WIVAN69VzgA1Al+sSrdY6MVgeMdrV3HWLRjOD0yC6g83/4vt/T4uH/hUKj\nSJNy/nF/WaSeTIOsiRVqdGYeYKhAKOxmNqmczPSjpJ1UcFdvlXNJ+nfCFUg3DKad\noH2RS/J6gL7uv2XyZegyvuhHclzjDTg1vCxdl2cV3eHnFhuz/T7o1QCGOZ0HdKlL\n1KW6eMT34xmRTE0SGgIcaybquALjbxKRidmdIlqNoQKBgQDtiwenPKSMZqIfq8Vn\nGMq/f39HXAduek8r0scgsUPSWHAwGgwtyPx8Di5TAuB+LYo+e/f9zx3jCbk83kEs\nhgJdDDT1beUjjpHmf/niPEivQcaZDt4XyP+Jr+9ffnOWNYx+TN8MuHynrs56/PeM\nqpGlYFcPjmJpEREElQDnet7JOQKBgQDCcAwSGB2y6DE8Kx9nKS/h/md+1m1KF28B\nt9TjG0tGD82EcW8qivaPNZVSltPbRQGkPTvNwE+KeE3c6ZK3DNCsGLeET4Z64nN7\nS58b2F8u6FldJmgDgYJrHkJYOV/0vdwgcTDKZgdYydKyW88wYPdTrWBAuiXkOk7x\nsUkClh+kEQKBgQDgWYQD7mGW/UQ311rcsWykCr3iXsfiDwCBalSJywI8QyzKMX+5\nKm9Ul2wnGLuAUHCV7S3eeGRIzyE1nNA/Rd4rlWDbQEy/FWM1KT+P7dHUPLJeUs1t\n93dpylGxhlOS1cZ4bw/nCsMo+A+p1wvSvjJK2D/BwH+vrd+9zSEKf2C0+QKBgQCP\nBDWMtZpatvlIBXwCuEPVGfhsTjJzFgt7mwkGx1O1w/fqHDmldDNpIQOljPVlyjsr\n4DJ146dd9aFoBZH5/H4cp82Mj6YeCyTgIr50j9FrQlJA9vf45DDWs5ofJIyVC3W3\nkypNJYDv6PuGX4tlTV1+ef9bfNBUMCNTGZDXSy8Y0QKBgQCV+UxOWJrMNAVa3rcE\nloIslLYa9S8xEOjAQYXfs7aYUTdQXtzrabUE1wmO+l386PmFnDFk4inPPhv9YnH3\n7KJpzfQfFaLyT2UOsrigKKwArxiBeJPzXNHL01zzLCN0USlRW7TSoYwb4szyj1lE\ntUrXTvQj21ceawDqSwfCN+BfSQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-4pfcokejsiidryc82mjg6af8tl@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "100105384406824178127",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-4pfcokejsiidryc82mjg6af8tl%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "8b76067c1e12268eba07ffc491a8f13aec564a36",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDPORb2HPbB6uUS\nTTOX2/vq000NBkHwEb1X8QiwmH/2m90f6JPNDqCLukbIUYDcf4xeLi5emZauTI7C\n8JrKU96nSmfhc/kfVNi+R6v4Pmk9Yv6KvgWYGrjz2Ml68BL4U0p57CRgubMhr/+2\nlOTkb3bDmblwUydr3zieifa1lJoh2h90Ue64rJWvm4hnQ4Ozgey/CxpvgPPCQ6D0\ncmSJCDye47CXyCUqltES7diewO+zsgtUW7taQz538JHSAaQV2vaTTJymNBMoTFjF\noI151DA+lYrACCeishZMvgZIwmuS8T4V+I3/M8imqiXtT7YXQUoHuO8Daf57EYVZ\nBKi8VUTFAgMBAAECggEAL53zQEekjiffTobN8bnbl/jJDlKfST6ST0h0Ujwgv3bO\nZ5wmhmqzipgZ1sMfxMtMYoHjJtrNLK0r6vCl6RM/qRpoZ36iQshY69SFWExjG3eJ\nfTEwEOUnFeV9WtIa0dQ123FfZJiXaIjMTlTFihZw6H6FBaId/2QyWv/h4JTOnDNc\nt7N7JxF67C79iYBztbM4UrklxeBF751f5bdEPDl/gz0I3i4pijU+fJpF7YjMZdID\nKjtrZq+n3aLljDKywxJmFPBaXVr2DPrVf1y9RKFrcFOvn4OOBRIvmPZlcTkhwdIA\nnqqWwO+hv/RRz9jyH8lVaD2rkde15FVme1xoqoa/oQKBgQDuaO0YNLKl6hp83gnt\ny9zDNeTZE+g0NxKKiYTUFpY1kKrWv6vKN16b0f22P6o1npnEFR2Olk3dIMx4iNBH\nG/DHx5ufUxEnR4GISpd4QQ9eLI8zXbVmzLajltSutyiGx7VYVLubU9Vw+62O9gI5\nBza0MlrI3dQW91iMTXIKhP/iFQKBgQDegxuOhd6VwfyZqrJWBxP0UhKJR/qQpQ0B\nqPsdDEJQrwi3P0DMQry2uPK+PZ83BCpFsioudq3UXof93VHq2xNPUWZkSRwdY64I\n+Wdd8C3MVmTBhh7hKGQZ3I8yXShBEQl0CRt4I3P84cyubBDph+Uqq0SRgVnmzME6\npjmik9pz8QKBgQDq/JjVBvwe9MPu15vJuup5rqFGJYz2CmJIEovN0AV1/oWk7X8R\n7clepHgCLnZCK3U8A+QCKrvMfQuMsq03qZ6GC4SkYWfC44QVJhBuAxJ2rEzpQDAQ\nhy5tx7kSDI3xat6flcTksJjsp+TFyE0gkK+mpQs+eQcXK+0nPR5up/DekQKBgQDB\n1g60apQLe7DUIKo4XPQaG0EAjE6PoOiisJUIqfw/EyuRjq2hAuYoexcjeMTxBVTZ\n4Cn0zfgCD9OB6EILSIsaxrte032FcKdUNAfDAo6y+fPNzkuqMyh4ivXHlvWRMQk+\nJwzh7GiHPCC1NXjKJ1MQh6A07Szm7SnLMLD2mrxr0QKBgGsLvKiP1132y52BFxzu\nac5AZJrn8NYYPh5yCBxbgag9wS8PvHX2nTGcC495ZnWliKnY6GoWCDGNx2twzJ5T\nbVKmgVmKIjKvOnZKcTpbl1ACqjTEM3pbmqi95Ooz4DdmalHitZHAcvmIMkXymc/T\nmgWeXoZVwRC9XmBOgdkdcJgk\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-77qpfefmyugnfm8zi11i3d56g3@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "102791831710399902605",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-77qpfefmyugnfm8zi11i3d56g3%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "8ca0b53f8b28f4a06cabb316eb5c62fa82535d57",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDElgrXvolK8B8c\np8XvQ7ooAiTdbxgAsa6+5RGAnuVfiIfkdeA3YxFfxSj/RwGGzyI/f3l1xarwjBvn\n9EBfMRuLZ4/e5xGfjG6/QblDsg+rF3iJSpJFdTIF9ZFro3t/STidkNf8269nFiW1\nPs+CxU+K6EqrHgagw8Df9qz/NKJKtEwJOQyL6hpwXlYCf5BEo/MbkiLTaZ14Aw/v\nBEgA3p84LfM3ATkBljsEBshswvvKv025ssfH/FYuQuI8oeufz3wX1H+UEwjD37vs\nrHLtvU2Oy5Cknh3F0kEAw2KRO2NZz29QC+BM9vBkhl20atul6vtPTOIQN+/IwgZ/\nWhzLF8FvAgMBAAECggEAQudNiV8vGnHeJMJ0eplyIWuZYEMOyC2wawdKjZuGNJ0i\non37cN4ma5GOAlMIEfksjq+zhoFfS75jQO2/eqYb2bXFIPdC6CnDBxQ3GPLgojm6\nq/7VCQ55l82bUCazQP6KZhWFbGjXqR3Ad46I0NiV2ZB02Qe++belTJOHDNO85+8a\nrxG0fR/DG4st9NYkiKTKaWfishuxebXKifTOvpyVj65ZEnJ/W2dB6zeD1CTx98DN\nsm3vWXx+kkLsn/bE6H/wGt5fXjcw6/pQY392/JWZ356ubcSHkKWhTO3hXmgv1b/k\n/ZEvYPtve/vSzaxv361XeLwvrkxKL7ATUz7+wcrfAQKBgQD8ageV+Nw91y7ATfZD\nkld2ZANHBf3zyXq8+r/3sPmVLVQxoYQPtTY49IIWTk5bDbsQKtrFYDn//579Q1MG\ntFzSUzGo3SG9R4aR2vyI0ZoofYXG1FRg9ctex6gYnCND5Ufpi/VpUEanuySqELAd\nw8AnR/vCIEzA/WZP97I6Wxl8CwKBgQDHYPqyRbDvYkvBx5aZGzx5naNJsMph0Jtf\nz+mtYWT9x/WR08uOgqhlBDUwVRSyCe6CBSko4qov0JjjeLfh/WOwcFxisM6YlHXa\nwonHoVGIW+roJ9o0Tjj/Bp0lFmhlQ3/ercvBtJNyQ4NSkQGoEwxx5JDvs7rJeAy2\nH97FaaOKrQKBgDcxD/uQ8Mds18Igyeo4g3tVnwnWm5LEyVutEHCed9RQlwpLIM82\ndma5wAAUmzl5pR+B31gtFEGPqToDkJH0uh8bJc6gm5IBo8Ecuv9HpYeY+rlhEBor\nZI6S5YSMD4H3DmRYwA6JCQn/96JgB8JaXRe5u6jU2zOPtOFjbcsoxEfFAoGBAJou\n9BAS9t5YnI8xgtPKDT1bW6AsGIYGJXG1vlb3P3tGPDDWoc8GWaUs2NkUopmANrLT\nvN3CU6wAW4tlmoYoRwR2D+u+ITY7cNyInrYDmaKiuoln8EWMzGTjv3ij2H2e8m7I\n5g5ZT8EIVrDuNGK+wFv/Ttofmm4c6W+aO9Ncez1NAoGAU2NRv6aDJBr04qKc7VsI\n+HCISYzkgkA7s3ulT4KrqvdKTFIOwOnzmYTcM2cFlyC//rZucS38+pxyRbEW+Icn\nHKqxRZCEmPjyqnkkanHtTGi2yG6+4TbDh9Q5wFNPUbDDaqqqaQEdfzB9Rib52up4\nEZU5JFj7QoQvdp/btaRTxZY=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-qzkhsgkefk0g-lv2uzteb9eztc@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "118276383384102548222",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-qzkhsgkefk0g-lv2uzteb9eztc%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "8d5e2a6e2634127b75568b13d4126f72e393e33a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJeyNBKJSK4MFY\n4YbYLVPmnprBEHYh3XD2L752dfjuoSovQVUWzaGiqvIUuG41y8d3nWBI8lZ7+3WX\n6I/uN0a6q9YZZb+mstlioReNJmFNcA/FiR+Jw7TdzYQ77ne3wJGFsxJP90KrEPla\nVo/8trKnpm0IVtXVtqL6BysaMEIdnEO+KR7j2O2AR9vLgVAjGEmmzrTUAXYlr/Jh\ndwWqQnzclT8yWEiy43LXIcqW6lRnbRL6wXy4pZJ1p16iIubs4HGgpr9oY3I7insr\nc7BUj5ocbgW+vzGi/HvK0MTtBNTsnac320xjnCb5YIKVUK4hLat6/TOGXPYvftDm\nkJxqzjwjAgMBAAECggEAOyP2/DhSKdXBSzqf3zKm7wndORCA7H3Ym5r2GEWWtUz/\nWfGebVwctufguS5Nw2K2gSjjy2W+9xOft+Be5zi4fTDVXo0cTW0wHCBXDmqWoyli\np8QRStn0bCrYRtM/tuNCk/E1Td2xZw9LcjX4e+CQ3l8eoBUFHX9HpYaXI0/JCHGB\nKhEMLcjRl02KMTxFkfm3+HUuprqYpviMNeyCnCOAVosLqN6B3teIGHNygCd5/gcL\nMD7uBW3QeToBTBO9YSuVVK7TWgeeQ2xUXUaFf+zS6AH77t2vJEMyfqzUL54n602d\n1rUIXcQ/nEqwIqNjyIZGYk58n85DSDTownrirsi1cQKBgQD3ircSzaYG4sKRFnuB\nm1tY51n0ZDOJITYJez/oqATtlXyE0ddZ3W5HXYEyRLOZdmyijtlymQydymMxAQyI\nrObNJkc5EqdLN+trnJyaTLsOri4zhO1dQe4PrhIEY0dAXqnmIWbnTz/w12yVF1GH\nmSexW2aszVFuK+3XwuGlM5GkOQKBgQDQXYWGwlxE+n/vf8yPRobKysCT1J7CIe/Q\nP0YoPr/BeUZYFmd6kr2rwu6hxmB84YY+vXRP9RhMXbq3Vgt59SxTJrSj6BEUAp2I\ngOUukGOynFk9WtCDFUqJT6Ehi48kgs521v30l6Hir6z99nbVkYmeL6bvgPD7Nlv0\nsH8wXQZ7OwKBgF81zFqAHKazWzCg3BoqngTg3xl/3M6WpokZDai3z0VuZLlVWKYo\n4/yw+ztRb17MTNZtaTeJpG+gY2x6wc5j6lXnridGhHAK7xKx5w32C1CHMCACtaVT\n8XO4eReU89fPUTvBhynasnY49XuWv3YPM1QlGqXGRtbAMLf3LgDzh8YJAoGAKR8r\n6QqWty5Q7W1la6lZlNAq7YH6ywlzkL/MEsk/gulyTpQtW+117V4NRnQmOr8vhVZS\njC0s3HVrEh+zKCCQ3OA4qlh0dmSFvpjhoizw4CEnI4q2uAgNq8fBXyNx3pzKLn4D\npLAATQKqu3xWu5N7e3KgGYhzBsEVqNbkYyEY1F0CgYEAykhXSz6FzzS9jvoML2/t\nXFAkJFs+oivtBLkM0d5CCev+ra7tPglU6HD5AQF9WmBBKosMESzwrlzk+NoiJ87P\nJtA0sAzkuLaytpQE9eDeOEa/ElfJkbZEOijhnHQ721AVeYE//VZh+bv8wb6PrHaV\n9uzztrp/Mi3/+48qtnKtP5M=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-wgu39agq5690uu5jgraj1lhegi@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "110824255769133780025",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-wgu39agq5690uu5jgraj1lhegi%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "1b325cb6586896592188fad3b96a032ca958002e",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCp9SDK3FC996uO\nu9milIfYtgq704FJl/iTkIVBEBMIs/hcWIre+fe84E0VdFoSw6o4nUjB7mqFQX+B\nUbqC1BMQn+yJ/D7S56qY7XNsYg2s5SFcu3oOezBHs4z7oQXT/4M1Io32NJbg7xlw\ntJ66Mt6vrXQeiOJ/JToKoZzcgx41KcpLkC1TvliB/0RMxLpw3+/5M1bnKwCN8LjO\nDf01gcXlfF9Kmp6zRcpLCegLA3g9Njx8RfX98LwWRf8iDKipPjlTR1l3SBwlnZmb\nrB6P7LLJkoXrlDLQNNOalWN0o61+YT2V/A0nQUxt42L7p7JEKldvpw52K3FWLxYw\nViJLc5TfAgMBAAECggEASC2e0hhTwAGlXbZAfK/Yq3vQPilaUF9WhZDMTq/dbYZE\n9S7zNzPwdsnJYtGpiSuIqId/hUDUAyioVkrXy0T2ncpVQdqa8aXKSS0apk5UIXej\nvgaulOTTQbgqqRie6YQrfE7i/EskQn24j6ldeZUuBmzDEk6u5jFwn2A4Rlv24bte\nmnFEc7KjRBExkQM5OY9rU88P0EiIuxssgIhNFym+Pow30i3sSSaA3c0Nff6FtlVc\nvx4tkocVMrq61n22Og3/z4tXcKdWLkcffcVSfTjIvjZcWQ3zq+N2Ltb2ZZVzJJRe\nL28ixIDjkXmDhpht7C30CBw4AqBownJaRGGpHqujcQKBgQDgF1hIkawePUHxd7kc\nPItNMFrMyIpKt0xB/t93vUOFrSpx+TW74foEyDdO+TgBETzxtE2Lfy6wo8jj9bNg\nyoESXVlOC1MLGNfQMMZ8MBC23PEHkwOV5uMva6iKxElNel76WuhwgGII7gkNPLl6\nRkCXo/u4fFTbNJdXJT9RG5iNEQKBgQDCKHunxGuhn4qYlRqI5kasreuKjalQlj6O\nIO4Ab73DDXVP/mY9CMePoIX6FW6yygZe6lyoR68rKJyrBX3p9Q9fjzYM5La2Clie\niI6qejVvDLUd3ZYjh0g2fb/qzutDOK9cFKZGXYD4j5p+EX26fYjpd0t5dB2XLS+H\nGFWxnxHC7wKBgFCQ1BKzHNh6WZ0A2DKIqeSEgACkEOQv5mDLy3f3ObFzwpDbcjAs\nXIEfopLoEvR/SBP2KPMANL8ZA37BtU4VQDZkDVl7xM12jxCwmIvJlBjKcnWwq1dX\nfVJtOFk7nMcYOdF0oaDg514ihmqV7HFDlLFwKW34dWGiFM8l+w+kBkKhAoGAAYRP\ncwAV1y1n58lCa89gvfid3nc822RRGMspENfOo7d3MyjJo7Bt3rFiWpHQS5VId3Vd\nQ/NLawrmLm/ci/deJ2D3CyK+Sq3KA3MNqkdKI5P11kXk5mIoLkTNOwhiziOjOxTu\nN56DY227x0Bbuxk/+JL2A/zkPkocFPIbuUeE3AECgYAAxDguc41VkFiHWa5K6JIJ\ndpU0kw5ukpeYnsG6uAflh1i37pAVqry6Xr8sqK8Qk5mahGrL5ywJhUueoCEQu7Zu\ni7UqrFuTrBbo8D7HxRho+GiIKtOhvxpskuw6BhZGqXvabkdAOkkmD6nQ0brYvVLf\nLpZFexheZ7Jbh5hI0nq0lw==\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-sn-k5qm5sdphfldnlw5gprza-e@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "108374201118262122479",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-sn-k5qm5sdphfldnlw5gprza-e%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}, {
  "type": "service_account",
  "project_id": "saf-2ajazgaqoe28g0-p6486861f7z",
  "private_key_id": "8d5e2a6e2634127b75568b13d4126f72e393e33a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJeyNBKJSK4MFY\n4YbYLVPmnprBEHYh3XD2L752dfjuoSovQVUWzaGiqvIUuG41y8d3nWBI8lZ7+3WX\n6I/uN0a6q9YZZb+mstlioReNJmFNcA/FiR+Jw7TdzYQ77ne3wJGFsxJP90KrEPla\nVo/8trKnpm0IVtXVtqL6BysaMEIdnEO+KR7j2O2AR9vLgVAjGEmmzrTUAXYlr/Jh\ndwWqQnzclT8yWEiy43LXIcqW6lRnbRL6wXy4pZJ1p16iIubs4HGgpr9oY3I7insr\nc7BUj5ocbgW+vzGi/HvK0MTtBNTsnac320xjnCb5YIKVUK4hLat6/TOGXPYvftDm\nkJxqzjwjAgMBAAECggEAOyP2/DhSKdXBSzqf3zKm7wndORCA7H3Ym5r2GEWWtUz/\nWfGebVwctufguS5Nw2K2gSjjy2W+9xOft+Be5zi4fTDVXo0cTW0wHCBXDmqWoyli\np8QRStn0bCrYRtM/tuNCk/E1Td2xZw9LcjX4e+CQ3l8eoBUFHX9HpYaXI0/JCHGB\nKhEMLcjRl02KMTxFkfm3+HUuprqYpviMNeyCnCOAVosLqN6B3teIGHNygCd5/gcL\nMD7uBW3QeToBTBO9YSuVVK7TWgeeQ2xUXUaFf+zS6AH77t2vJEMyfqzUL54n602d\n1rUIXcQ/nEqwIqNjyIZGYk58n85DSDTownrirsi1cQKBgQD3ircSzaYG4sKRFnuB\nm1tY51n0ZDOJITYJez/oqATtlXyE0ddZ3W5HXYEyRLOZdmyijtlymQydymMxAQyI\nrObNJkc5EqdLN+trnJyaTLsOri4zhO1dQe4PrhIEY0dAXqnmIWbnTz/w12yVF1GH\nmSexW2aszVFuK+3XwuGlM5GkOQKBgQDQXYWGwlxE+n/vf8yPRobKysCT1J7CIe/Q\nP0YoPr/BeUZYFmd6kr2rwu6hxmB84YY+vXRP9RhMXbq3Vgt59SxTJrSj6BEUAp2I\ngOUukGOynFk9WtCDFUqJT6Ehi48kgs521v30l6Hir6z99nbVkYmeL6bvgPD7Nlv0\nsH8wXQZ7OwKBgF81zFqAHKazWzCg3BoqngTg3xl/3M6WpokZDai3z0VuZLlVWKYo\n4/yw+ztRb17MTNZtaTeJpG+gY2x6wc5j6lXnridGhHAK7xKx5w32C1CHMCACtaVT\n8XO4eReU89fPUTvBhynasnY49XuWv3YPM1QlGqXGRtbAMLf3LgDzh8YJAoGAKR8r\n6QqWty5Q7W1la6lZlNAq7YH6ywlzkL/MEsk/gulyTpQtW+117V4NRnQmOr8vhVZS\njC0s3HVrEh+zKCCQ3OA4qlh0dmSFvpjhoizw4CEnI4q2uAgNq8fBXyNx3pzKLn4D\npLAATQKqu3xWu5N7e3KgGYhzBsEVqNbkYyEY1F0CgYEAykhXSz6FzzS9jvoML2/t\nXFAkJFs+oivtBLkM0d5CCev+ra7tPglU6HD5AQF9WmBBKosMESzwrlzk+NoiJ87P\nJtA0sAzkuLaytpQE9eDeOEa/ElfJkbZEOijhnHQ721AVeYE//VZh+bv8wb6PrHaV\n9uzztrp/Mi3/+48qtnKtP5M=\n-----END PRIVATE KEY-----\n",
  "client_email": "mfc-wgu39agq5690uu5jgraj1lhegi@saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com",
  "client_id": "110824255769133780025",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mfc-wgu39agq5690uu5jgraj1lhegi%40saf-2ajazgaqoe28g0-p6486861f7z.iam.gserviceaccount.com"
}
];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random()*serviceaccounts.length)]; // DO NOT TOUCH THIS
const domains_for_dl = ['https://edith1.packs1.workers.dev', 'https://edith2.packs1.workers.dev', 'https://edith1.packs2.workers.dev', 'https://edith2.packs2.workers.dev']; // add multiple cloudflare addresses to balance the load on download/stream servers, eg. ['https://testing.fetchgoogleapi.workers.dev', 'https://testing2.fetchgoogleapi2.workers.dev']
const domain_for_dl = domains_for_dl[Math.floor(Math.random()*domains_for_dl.length)]; // DO NOT TOUCH THIS
const blocked_region = ['']; // add regional codes seperated by comma, eg. ['IN', 'US', 'PK']
const authConfig = {
    "siteName": "Edith Collections", // Website name
    "client_id": "746239575955-oao9hkv614p8glrqpvuh5i8mqfoq145b.apps.googleusercontent.com", // Client id from Google Cloud Console
    "client_secret": "u5a1CSY5pNjdD2tGTU93TTnI", // Client Secret from Google Cloud Console
    "refresh_token": "1//0eYCIbm7TunlgCgYIARAAGA4SNwF-L9Ir9D5Qhy7cMw3_WbkVRvyY-04dUHydadNxNnwAadv-mZoyDEg81tzCELMKtWMhdbqVTc4", // Authorize token
    "service_account": true, // true if you're using Service Account instead of user account
    "service_account_json": randomserviceaccount, // don't touch this one
    "files_list_page_size": 50,
    "search_result_list_page_size": 50,
    "enable_cors_file_down": false,
    "enable_password_file_verify": true, // support for .password file
    "roots":[
      {
          "id": "0AMpPiaJpRiSVUk9PVA",
          "name": "[Edith Packs] - Movies",
          "protect_file_link": false,
          "auth": {"edith":"jarvis", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
      {
          "id": "0AMpPiaJpRiSVUk9PVA",
          "name": "[Edith Packs] - Series",
          "protect_file_link": false,
          "auth": {"edith":"jarvis", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
      {
          "id": "0AMpPiaJpRiSVUk9PVA",
          "name": "[Edith Packs] - Anime",
          "protect_file_link": false,
          "auth": {"edith":"jarvis", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
      {
          "id": "0AMpPiaJpRiSVUk9PVA",
          "name": "[Edith Packs] - Cartoons",
          "protect_file_link": false,
          "auth": {"edith":"jarvis", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
    ]};


/*
███████╗██████╗░██╗████████╗  ████████╗██╗░░██╗███████╗░██████╗███████╗
██╔════╝██╔══██╗██║╚══██╔══╝  ╚══██╔══╝██║░░██║██╔════╝██╔════╝██╔════╝
█████╗░░██║░░██║██║░░░██║░░░  ░░░██║░░░███████║█████╗░░╚█████╗░█████╗░░
██╔══╝░░██║░░██║██║░░░██║░░░  ░░░██║░░░██╔══██║██╔══╝░░░╚═══██╗██╔══╝░░
███████╗██████╔╝██║░░░██║░░░  ░░░██║░░░██║░░██║███████╗██████╔╝███████╗
╚══════╝╚═════╝░╚═╝░░░╚═╝░░░  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚══════╝

██╗░░░██╗░█████╗░██╗░░░░░██╗░░░██╗███████╗░██████╗
██║░░░██║██╔══██╗██║░░░░░██║░░░██║██╔════╝██╔════╝
╚██╗░██╔╝███████║██║░░░░░██║░░░██║█████╗░░╚█████╗░
░╚████╔╝░██╔══██║██║░░░░░██║░░░██║██╔══╝░░░╚═══██╗
░░╚██╔╝░░██║░░██║███████╗╚██████╔╝███████╗██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝░╚═════╝░╚══════╝╚═════╝░*/

const uiConfig = {
    "theme": "darkly", // switch between themes, default set to vapor, select from https://www.npmjs.com/package/@googledrive/index
    "version": "2.0.20", // don't touch this one. get latest code using generator at https://bdi-generator.hashhackers.com
    // If you're using Image then set to true, If you want text then set it to false
    "logo_image": false, // true if you're using image link in next option.
    "logo_height": "", // only if logo_image is true
    "logo_width": "100px", // only if logo_image is true
    "favicon": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.0.20/images/favicon.ico",
    // if logo is true then link otherwise just text for name
    "logo_link_name": "Edith Packs",
    "fixed_header": true, // If you want the footer to be flexible or fixed.
    "header_padding": "60", // Value 60 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
    "nav_link_1": "Home", // change navigation link name
    "nav_link_3": "Current Path", // change navigation link name
    "nav_link_4": "Contact", // change navigation link name
    "fixed_footer": false, // If you want the footer to be flexible or fixed.
    "hide_footer": true, // hides the footer from site entirely.
    "header_style_class": "navbar-dark bg-primary", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
    "footer_style_class": "bg-primary", // bg-primary || bg-dark || bg-light
    "css_a_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "css_p_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "folder_text_color": "white", // Color Name or Hex Code eg. #ffffff
    "loading_spinner_class": "text-light", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
    "search_button_class": "btn btn-danger", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
    "path_nav_alert_class": "alert alert-primary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_view_alert_class": "alert alert-danger", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_count_alert_class": "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "contact_link": "https://telegram.dog/Telegram", // Link to Contact Button on Menu
    "copyright_year": "2025", // year of copyright, can be anything like 2015 - 2020 or just 2020
    "company_name": "Edith SeedBox", // Name next to copyright
    "company_link": "https://telegram.dog/Telegram", // link of copyright name
    "credit": false, // Set this to true to give us credit
    "display_size": true, // Set this to false to hide display file size
    "display_time": false, // Set this to false to hide display modified time for folder and files
    "display_download": true, // Set this to false to hide download icon for folder and files on main index
    "disable_player": false, // Set this to true to hide audio and video players
    "custom_srt_lang": "", // Subtitle Language Code for Custom .vtt language.
    "disable_video_download": false, // Remove Download, Copy Button on Videos
    "second_domain_for_dl": true, // If you want to display other URL for Downloading to protect your main domain.
    "downloaddomain": domain_for_dl, // Ignore this and set domains at top of this page after service accounts.
    "poster": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.0.20/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
    "audioposter": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.0.20/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
    "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/npm/@googledrive/index", // If Project is Forked, then enter your GitHub repo
    "render_head_md": true, // Render Head.md
    "render_readme_md": true, // Render Readme.md
    "display_drive_link": false, // This will add a Link Button to Google Drive of that particular file.
    "plyr_io_version": "3.6.4", // Change plyr.io version in future when needed.
    "plyr_io_video_resolution": "16:9", // For reference, visit: https://github.com/sampotts/plyr#options
    "unauthorized_owner_link": "https://telegram.dog/Telegram", // Unauthorized Error Page Link to Owner
    "unauthorized_owner_email": "abuse@telegram.org", // Unauthorized Error Page Owner Email
    "arc_code": "pt6LwbbH", // arc.io Integration Code, get yours from https://portal.arc.io
    "search_all_drives": false // turn this on to switch this to gdrive search application
};


/*
██████╗░░█████╗░  ███╗░░██╗░█████╗░████████╗  ███████╗██████╗░██╗████████╗
██╔══██╗██╔══██╗  ████╗░██║██╔══██╗╚══██╔══╝  ██╔════╝██╔══██╗██║╚══██╔══╝
██║░░██║██║░░██║  ██╔██╗██║██║░░██║░░░██║░░░  █████╗░░██║░░██║██║░░░██║░░░
██║░░██║██║░░██║  ██║╚████║██║░░██║░░░██║░░░  ██╔══╝░░██║░░██║██║░░░██║░░░
██████╔╝╚█████╔╝  ██║░╚███║╚█████╔╝░░░██║░░░  ███████╗██████╔╝██║░░░██║░░░
╚═════╝░░╚════╝░  ╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░  ╚══════╝╚═════╝░╚═╝░░░╚═╝░░░

██████╗░███████╗██╗░░░░░░█████╗░░██╗░░░░░░░██╗
██╔══██╗██╔════╝██║░░░░░██╔══██╗░██║░░██╗░░██║
██████╦╝█████╗░░██║░░░░░██║░░██║░╚██╗████╗██╔╝
██╔══██╗██╔══╝░░██║░░░░░██║░░██║░░████╔═████║░
██████╦╝███████╗███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░
╚═════╝░╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░*/

// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
var gds = [];

function html(current_drive_order = 0, model = {}) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <script async src="https://arc.io/widget.min.js#${uiConfig.arc_code}"></script>
  <meta name="robots" content="noindex" />
  <link rel="icon" href="${uiConfig.favicon}">
  <script>
    window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
    window.MODEL = JSON.parse('${JSON.stringify(model)}');
    window.current_drive_order = ${current_drive_order};
    window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  </script>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/${uiConfig.theme}/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <style>a{color:${uiConfig.css_a_tag_color};}p{color:${uiConfig.css_p_tag_color};}</style>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/js/app.obf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/mozilla/pdf.js@gh-pages/build/pdf.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
</body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
  <script src="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.polyfilled.js"></script>
</html>`;
};

const unauthorized = `<html>
<head><title>401 Unauthorized</title></head>
<body>
<center><h1>401 Unauthorized</h1></center>
<hr><center>BhadooDriveIndex/${uiConfig.version}</center>
<hr><center>Please contact <a href="${uiConfig.unauthorized_owner_link}">Site Owner</a> at ${uiConfig.unauthorized_owner_email}</center>
</body>
</html>`

const not_found = `<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s an error.</ins>
  <p id="status"></p>

  <script>
  document.getElementById("status").innerHTML =
"The requested URL <code>" + window.location.pathname + "</code> was not found on this server.  <ins>That’s all we know.</ins>";
  </script>`


const SearchFunction = {
    formatSearchKeyword: function(keyword) {
        let nothing = "";
        let space = " ";
        if (!keyword) return nothing;
        return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
            .replace(/[,，|(){}]/g, space)
            .trim()
    }

};

const DriveFixedTerms = new(class {
    default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
    gd_root_type = {
        user_drive: 0,
        share_drive: 1,
        sub_folder: 2
    };
    folder_mime_type = 'application/vnd.google-apps.folder';
})();

const JSONWebToken = {
    header: {
        alg: 'RS256',
        typ: 'JWT'
    },
    importKey: async function(pemKey) {
        var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
        return crypto.subtle.importKey('pkcs8', pemDER, {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256'
        }, false, ['sign']);
    },
    createSignature: async function(text, key) {
        const textBuffer = this.textUtils.stringToArrayBuffer(text);
        return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
    },
    generateGCPToken: async function(serviceAccount) {
        const iat = parseInt(Date.now() / 1000);
        var payload = {
            "iss": serviceAccount.client_email,
            "scope": "https://www.googleapis.com/auth/drive",
            "aud": "https://oauth2.googleapis.com/token",
            "exp": iat + 3600,
            "iat": iat
        };
        const encPayload = btoa(JSON.stringify(payload));
        const encHeader = btoa(JSON.stringify(this.header));
        var key = await this.importKey(serviceAccount.private_key);
        var signed = await this.createSignature(encHeader + "." + encPayload, key);
        return encHeader + "." + encPayload + "." + this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
    },
    textUtils: {
        base64ToArrayBuffer: function(base64) {
            var binary_string = atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        },
        stringToArrayBuffer: function(str) {
            var len = str.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = str.charCodeAt(i);
            }
            return bytes.buffer;
        },
        arrayBufferToBase64: function(buffer) {
            let binary = '';
            let bytes = new Uint8Array(buffer);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }
    }
};

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const region_blocked = `<!DOCTYPE html> <html lang=en> <meta charset=utf-8> <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width"> <title>Error 404 (Not Found)!!1</title> <style> *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px} </style> <a href=//www.google.com/><span id=logo aria-label=Google></span></a> <p><b>404.</b> <ins>That’s an error.</ins> <p id="status"></p> <script> document.getElementById("status").innerHTML = "The requested URL <code>" + window.location.pathname + "</code> was not found on this server.  <ins>That’s all we know. Your IP is `+request.headers.get("CF-Connecting-IP")+` (`+request.cf.country+`)</ins>"; </script>`
    if (gds.length === 0) {
        for (let i = 0; i < authConfig.roots.length; i++) {
            const gd = new googleDrive(authConfig, i);
            await gd.init();
            gds.push(gd)
        }
        let tasks = [];
        gds.forEach(gd => {
            tasks.push(gd.initRootType());
        });
        for (let task of tasks) {
            await task;
        }
    }

    let gd;
    let url = new URL(request.url);
    let path = url.pathname;

    function redirectToIndexPage() {
        return new Response('', {
            status: 301,
            headers: {
                'Location': `${url.origin}/0:/`
            }
        });
    }

    if (path == '/') return redirectToIndexPage();
    if (path.toLowerCase() == '/arc-sw.js') {
        return fetch("https://arc.io/arc-sw.js")
    } else if (path.toLowerCase() == '/admin') {
        return Response.redirect("https://www.npmjs.com/package/@googledrive/index", 301)
    } else if (path.toLowerCase() == '/movies') {
        return Response.redirect("/0:/", 301)
    } else if (path.toLowerCase() == '/series') {
        return Response.redirect("/1:/", 301)
    } else if (path.toLowerCase() == '/anime') {
        return Response.redirect("/2:/", 301)
    } else if (path.toLowerCase() == '/animes') {
        return Response.redirect("/2:/", 301)
    } else if (path.toLowerCase() == '/cartoon') {
        return Response.redirect("/3:/", 301)
    } else if (path.toLowerCase() == '/cartoons') {
        return Response.redirect("/3:/", 301)
    } else if (blocked_region.includes(region)) {
        return new Response(region_blocked, {
            status: 403,
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        })
    }

    const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)(\/.*)?$/g;
    const match = command_reg.exec(path);
    if (match) {
        const num = match.groups.num;
        const order = Number(num);
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
        for (const r = gd.basicAuthResponse(request); r;) return r;
        const command = match.groups.command;
        if (command === 'search') {
            if (request.method === 'POST') {
                return handleSearch(request, gd);
            } else {
                const params = url.searchParams;
                return new Response(html(gd.order, {
                    q: params.get("q").replace(/'/g, "").replace(/"/g, "") || '',
                    is_search_page: true,
                    root_type: gd.root_type
                }), {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    }
                });
            }
        } else if (command === 'id2path' && request.method === 'POST') {
            return handleId2Path(request, gd)
        }
    }

    const common_reg = /^\/\d+:\/.*$/g;
    try {
        if (!path.match(common_reg)) {
            return redirectToIndexPage();
        }
        let split = path.split("/");
        let order = Number(split[1].slice(0, -1));
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
    } catch (e) {
        return redirectToIndexPage()
    }

    const basic_auth_res = gd.basicAuthResponse(request);

    path = path.replace(gd.url_path_prefix, '') || '/';
    if (request.method == 'POST') {
        return basic_auth_res || apiRequest(request, gd);
    }

    let action = url.searchParams.get('a');

    if (path.substr(-1) == '/' || action != null) {
        return basic_auth_res || new Response(html(gd.order, {
            root_type: gd.root_type
        }), {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
    } else {
        if (path.split('/').pop().toLowerCase() == ".password") {
            return basic_auth_res || new Response("", {
                status: 404
            });
        }
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        const inline_down = 'true' === url.searchParams.get('inline');
        if (gd.root.protect_file_link && basic_auth_res) return basic_auth_res;
        return gd.down(file?.id, range, inline_down);
    }
}

function gdiencode(str) {
    var gdijsorg_0x40df = ['1KzJBAK', '1697708zMrtEu', '295396TasIvj', '21011Eyuayv', '1217593CxovUD', 'fromCharCode', '143062xekFCR', 'replace', '74bcHwvq', '73939wlqHSM', '2CBdqkc', '1712527AcNPoP'];
    var gdijsorg_0x5556bb = gdijsorg_0x56b1;
    (function(_0x3f3911, _0x38bce9) {
        var _0x32440e = gdijsorg_0x56b1;
        while (!![]) {
            try {
                var _0x2cab6f = -parseInt(_0x32440e(0xb3)) + -parseInt(_0x32440e(0xb7)) * -parseInt(_0x32440e(0xb6)) + -parseInt(_0x32440e(0xaf)) * -parseInt(_0x32440e(0xad)) + -parseInt(_0x32440e(0xb1)) + parseInt(_0x32440e(0xae)) + parseInt(_0x32440e(0xac)) + parseInt(_0x32440e(0xb0)) * -parseInt(_0x32440e(0xb5));
                if (_0x2cab6f === _0x38bce9) break;
                else _0x3f3911['push'](_0x3f3911['shift']());
            } catch (_0x34d506) {
                _0x3f3911['push'](_0x3f3911['shift']());
            }
        }
    }(gdijsorg_0x40df, 0xe5038));

    function gdijsorg_0x56b1(_0x1ccc20, _0x1596c4) {
        _0x1ccc20 = _0x1ccc20 - 0xac;
        var _0x40df0f = gdijsorg_0x40df[_0x1ccc20];
        return _0x40df0f;
    }
    return btoa(encodeURIComponent(str)[gdijsorg_0x5556bb(0xb4)](/%([0-9A-F]{2})/g, function toSolidBytes(_0xe8cc7f, _0x12410f) {
        var _0x1cce23 = gdijsorg_0x5556bb;
        return String[_0x1cce23(0xb2)]('0x' + _0x12410f);
    }));
}

async function apiRequest(request, gd) {
    let url = new URL(request.url);
    let path = url.pathname;
    path = path.replace(gd.url_path_prefix, '') || '/';

    let option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }

    if (path.substr(-1) == '/') {
        let form = await request.formData();
        let deferred_list_result = gd.list(path, form.get('page_token'), Number(form.get('page_index')));

        if (authConfig['enable_password_file_verify']) {
            let password = await gd.password(path);
            // console.log("dir password", password);
            if (password && password.replace("\n", "") !== form.get('password')) {
                let html = `Y29kZWlzcHJvdGVjdGVk=0Xfi4icvJnclBCZy92dzNXYwJCI6ISZnF2czVWbiwSMwQDI6ISZk92YisHI6IicvJnclJyeYmFzZTY0aXNleGNsdWRlZA==`;
                return new Response(html, option);
            }
        }

        let list_result = await deferred_list_result;
        return new Response(rewrite(gdiencode(JSON.stringify(list_result), option)));
    } else {
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        return new Response(rewrite(gdiencode(JSON.stringify(file))));
    }
}

// deal with search
async function handleSearch(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let search_result = await
    gd.search(form.get('q') || '', form.get('page_token'), Number(form.get('page_index')));
    return new Response(rewrite(gdiencode(JSON.stringify(search_result), option)));
}

async function handleId2Path(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let path = await gd.findPathById(form.get('id'));
    return new Response(path || '', option);
}

class googleDrive {
    constructor(authConfig, order) {
        this.order = order;
        this.root = authConfig.roots[order];
        this.root.protect_file_link = this.root.protect_file_link || false;
        this.url_path_prefix = `/${order}:`;
        this.authConfig = authConfig;
        this.paths = [];
        this.files = [];
        this.passwords = [];
        this.id_path_cache = {};
        this.id_path_cache[this.root['id']] = '/';
        this.paths["/"] = this.root['id'];
    }
    async init() {
        await this.accessToken();
        if (authConfig.user_drive_real_root_id) return;
        const root_obj = await (gds[0] || this).findItemById('root');
        if (root_obj && root_obj.id) {
            authConfig.user_drive_real_root_id = root_obj.id
        }
    }

    async initRootType() {
        const root_id = this.root['id'];
        const types = DriveFixedTerms.gd_root_type;
        if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
            this.root_type = types.user_drive;
        } else {
            const obj = await this.getShareDriveObjById(root_id);
            this.root_type = obj ? types.share_drive : types.sub_folder;
        }
    }

    basicAuthResponse(request) {
        const auth = this.root.auth || '',
            _401 = new Response(unauthorized, {
                headers: {
                    'WWW-Authenticate': `Basic realm="goindex:drive:${this.order}"`,
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
        if (auth) {
            const _auth = request.headers.get('Authorization')
            if (_auth) {
                const [received_user, received_pass] = atob(_auth.split(' ').pop()).split(':');
                if (auth.hasOwnProperty(received_user)) {
                    if (auth[received_user] == received_pass) {
                        return null;
                    } else return _401;
                } else return _401;
            }
        } else return null;
        return _401;
    }

    async down(id, range = '', inline = false) {
        let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
        let requestOption = await this.requestOption();
        requestOption.headers['Range'] = range;
        let res = await fetch(url, requestOption);
        const second_domain_for_dl = `${uiConfig.second_domain_for_dl}`
        if (second_domain_for_dl == 'true') {
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/disable_download.html`);
            return new Response(await res.text(), {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
        else if (res.ok) {
            const {
                headers
            } = res = new Response(res.body, res)
            this.authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
            inline === true && headers.set('Content-Disposition', 'inline');
            return res;
        }
        else {
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/DownloadError.html`);
            return new Response(await res.text(), {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
    }

    async file(path) {
        if (typeof this.files[path] == 'undefined') {
            this.files[path] = await this._file(path);
        }
        return this.files[path];
    }

    async _file(path) {
        let arr = path.split('/');
        let name = arr.pop();
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        let dir = arr.join('/') + '/';
        // console.log(name, dir);
        let parent = await this.findPathId(dir);
        // console.log(parent);
        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and name = '${name}' and trashed = false`;
        params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        // console.log(obj);
        return obj.files[0];
    }

    async list(path, page_token = null, page_index = 0) {
        if (this.path_children_cache == undefined) {
            // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
            this.path_children_cache = {};
        }

        if (this.path_children_cache[path] &&
            this.path_children_cache[path][page_index] &&
            this.path_children_cache[path][page_index].data
        ) {
            let child_obj = this.path_children_cache[path][page_index];
            return {
                nextPageToken: child_obj.nextPageToken || null,
                curPageIndex: page_index,
                data: child_obj.data
            };
        }

        let id = await this.findPathId(path);
        let result = await this._ls(id, page_token, page_index);
        let data = result.data;
        if (result.nextPageToken && data.files) {
            if (!Array.isArray(this.path_children_cache[path])) {
                this.path_children_cache[path] = []
            }
            this.path_children_cache[path][Number(result.curPageIndex)] = {
                nextPageToken: result.nextPageToken,
                data: data
            };
        }

        return result
    }


    async _ls(parent, page_token = null, page_index = 0) {

        if (parent == undefined) {
            return null;
        }
        let obj;
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and trashed = false AND name !='.password'`;
        params.orderBy = 'folder,name,modifiedTime desc';
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.files_list_page_size;

        if (page_token) {
            params.pageToken = page_token;
        }
        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        obj = await response.json();

        return {
            nextPageToken: obj.nextPageToken || null,
            curPageIndex: page_index,
            data: obj
        };
    }

    async password(path) {
        if (this.passwords[path] !== undefined) {
            return this.passwords[path];
        }

        let file = await this.file(path + '.password');
        if (file == undefined) {
            this.passwords[path] = null;
        } else {
            let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
            let requestOption = await this.requestOption();
            let response = await this.fetch200(url, requestOption);
            this.passwords[path] = await response.text();
        }

        return this.passwords[path];
    }

    async getShareDriveObjById(any_id) {
        if (!any_id) return null;
        if ('string' !== typeof any_id) return null;

        let url = `https://www.googleapis.com/drive/v3/drives/${any_id}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        let obj = await res.json();
        if (obj && obj.id) return obj;

        return null
    }

    async search(origin_keyword, page_token = null, page_index = 0) {
        const types = DriveFixedTerms.gd_root_type;
        const is_user_drive = this.root_type === types.user_drive;
        const is_share_drive = this.root_type === types.share_drive;
        const search_all_drives = `${uiConfig.search_all_drives}`
        const empty_result = {
            nextPageToken: null,
            curPageIndex: page_index,
            data: null
        };

        if (!is_user_drive && !is_share_drive) {
            return empty_result;
        }
        let keyword = SearchFunction.formatSearchKeyword(origin_keyword);
        if (!keyword) {
            return empty_result;
        }
        let words = keyword.split(/\s+/);
        let name_search_str = `name contains '${words.join("' AND name contains '")}'`;
        let params = {};
        if (is_user_drive) {
            if (search_all_drives == 'true') {
                params.corpora = 'allDrives';
                params.includeItemsFromAllDrives = true;
                params.supportsAllDrives = true;
            }
            else {
                params.corpora = 'user';
            }
        }
        if (is_share_drive) {
            if (search_all_drives == 'true') {
                params.corpora = 'allDrives';
            }
            else {
                params.corpora = 'drive';
                params.driveId = this.root.id;
            }
            params.includeItemsFromAllDrives = true;
            params.supportsAllDrives = true;
        }
        if (page_token) {
            params.pageToken = page_token;
        }
        params.q = `trashed = false AND name !='.password' AND (${name_search_str})`;
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.search_result_list_page_size;
        params.orderBy = 'folder,name,modifiedTime desc';

        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let res_obj = await response.json();

        return {
            nextPageToken: res_obj.nextPageToken || null,
            curPageIndex: page_index,
            data: res_obj
        };
    }

    async findParentFilesRecursion(child_id, contain_myself = true) {
        const gd = this;
        const gd_root_id = gd.root.id;
        const user_drive_real_root_id = authConfig.user_drive_real_root_id;
        const is_user_drive = gd.root_type === DriveFixedTerms.gd_root_type.user_drive;
        const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
        const fields = DriveFixedTerms.default_file_fields;
        const parent_files = [];
        let meet_top = false;

        async function addItsFirstParent(file_obj) {
            if (!file_obj) return;
            if (!file_obj.parents) return;
            if (file_obj.parents.length < 1) return;
            let p_ids = file_obj.parents;
            if (p_ids && p_ids.length > 0) {
                const first_p_id = p_ids[0];
                if (first_p_id === target_top_id) {
                    meet_top = true;
                    return;
                }
                const p_file_obj = await gd.findItemById(first_p_id);
                if (p_file_obj && p_file_obj.id) {
                    parent_files.push(p_file_obj);
                    await addItsFirstParent(p_file_obj);
                }
            }
        }

        const child_obj = await gd.findItemById(child_id);
        if (contain_myself) {
            parent_files.push(child_obj);
        }
        await addItsFirstParent(child_obj);

        return meet_top ? parent_files : null
    }

    async findPathById(child_id) {
        if (this.id_path_cache[child_id]) {
            return this.id_path_cache[child_id];
        }

        const p_files = await this.findParentFilesRecursion(child_id);
        if (!p_files || p_files.length < 1) return '';

        let cache = [];
        // Cache the path and id of each level found
        p_files.forEach((value, idx) => {
            const is_folder = idx === 0 ? (p_files[idx].mimeType === DriveFixedTerms.folder_mime_type) : true;
            let path = '/' + p_files.slice(idx).map(it => it.name).reverse().join('/');
            if (is_folder) path += '/';
            cache.push({
                id: p_files[idx].id,
                path: path
            })
        });

        cache.forEach((obj) => {
            this.id_path_cache[obj.id] = obj.path;
            this.paths[obj.path] = obj.id
        });
        return cache[0].path;
    }

    async findItemById(id) {
        const is_user_drive = this.root_type === DriveFixedTerms.gd_root_type.user_drive;
        let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${DriveFixedTerms.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        return await res.json()
    }

    async findPathId(path) {
        let c_path = '/';
        let c_id = this.paths[c_path];

        let arr = path.trim('/').split('/');
        for (let name of arr) {
            c_path += name + '/';

            if (typeof this.paths[c_path] == 'undefined') {
                let id = await this._findDirId(c_id, name);
                this.paths[c_path] = id;
            }

            c_id = this.paths[c_path];
            if (c_id == undefined || c_id == null) {
                break;
            }
        }
        return this.paths[path];
    }

    async _findDirId(parent, name) {
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        if (parent == undefined) {
            return null;
        }

        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
        params.fields = "nextPageToken, files(id, name, mimeType)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        if (obj.files[0] == undefined) {
            return null;
        }
        return obj.files[0].id;
    }

    async accessToken() {
        console.log("accessToken");
        if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
            const obj = await this.fetchAccessToken();
            if (obj.access_token != undefined) {
                this.authConfig.accessToken = obj.access_token;
                this.authConfig.expires = Date.now() + 3500 * 1000;
            }
        }
        return this.authConfig.accessToken;
    }

    async fetchAccessToken() {
        console.log("fetchAccessToken");
        const url = "https://www.googleapis.com/oauth2/v4/token";
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var post_data;
        if (this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined") {
            const jwttoken = await JSONWebToken.generateGCPToken(this.authConfig.service_account_json);
            post_data = {
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: jwttoken,
            };
        } else {
            post_data = {
                client_id: this.authConfig.client_id,
                client_secret: this.authConfig.client_secret,
                refresh_token: this.authConfig.refresh_token,
                grant_type: "refresh_token",
            };
        }

        let requestOption = {
            'method': 'POST',
            'headers': headers,
            'body': this.enQuery(post_data)
        };

        const response = await fetch(url, requestOption);
        return await response.json();
    }

    async fetch200(url, requestOption) {
        let response;
        for (let i = 0; i < 3; i++) {
            response = await fetch(url, requestOption);
            console.log(response.status);
            if (response.status != 403) {
                break;
            }
            await this.sleep(800 * (i + 1));
        }
        return response;
    }

    async requestOption(headers = {}, method = 'GET') {
        const accessToken = await this.accessToken();
        headers['authorization'] = 'Bearer ' + accessToken;
        return {
            'method': method,
            'headers': headers
        };
    }

    enQuery(data) {
        const ret = [];
        for (let d in data) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return ret.join('&');
    }

    sleep(ms) {
        return new Promise(function(resolve, reject) {
            let i = 0;
            setTimeout(function() {
                console.log('sleep' + ms);
                i++;
                if (i >= 2) reject(new Error('i>=2'));
                else resolve(i);
            }, ms);
        })
    }
}

function rewrite(str) {
    var gdijsorg_0x4e46 = ['join', 'YmFzZTY0aXNleGNsdWRlZA==', '377943YNHRVT', '133527xcoEHq', '138191tQqett', '4JgyeDu', '299423DYjNuN', '622qCMSPH', 'reverse', 'split', '950361qrHraF', '1PjZtJR', '120619DeiSfH', '1153ekVsUn'];

    function gdijsorg_0x276f(_0x37674d, _0x2582b3) {
        _0x37674d = _0x37674d - 0x162;
        var _0x4e46db = gdijsorg_0x4e46[_0x37674d];
        return _0x4e46db;
    }
    var gdijsorg_0x3f8728 = gdijsorg_0x276f;
    (function(_0x4d8ef8, _0x302a25) {
        var _0x83f66b = gdijsorg_0x276f;
        while (!![]) {
            try {
                var _0x396eb3 = parseInt(_0x83f66b(0x16c)) * -parseInt(_0x83f66b(0x164)) + -parseInt(_0x83f66b(0x162)) * -parseInt(_0x83f66b(0x163)) + -parseInt(_0x83f66b(0x16b)) + -parseInt(_0x83f66b(0x167)) + -parseInt(_0x83f66b(0x169)) * -parseInt(_0x83f66b(0x16a)) + parseInt(_0x83f66b(0x168)) + parseInt(_0x83f66b(0x16f));
                if (_0x396eb3 === _0x302a25) break;
                else _0x4d8ef8['push'](_0x4d8ef8['shift']());
            } catch (_0x2dc29f) {
                _0x4d8ef8['push'](_0x4d8ef8['shift']());
            }
        }
    }(gdijsorg_0x4e46, 0x588f3));
    var sa = str[gdijsorg_0x3f8728(0x16e)](''),
        ra = sa[gdijsorg_0x3f8728(0x16d)](),
        ja = ra[gdijsorg_0x3f8728(0x165)](''),
        aj = 'Y29kZWlzcHJvdGVjdGVk' + ja + gdijsorg_0x3f8728(0x166);
    return aj;
}

String.prototype.trim = function(char) {
    if (char) {
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};
