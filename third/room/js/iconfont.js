;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-qiyejianzhan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.974401 0c-282.712264 0-511.974401 229.210939-511.974401 511.974401s229.210939 511.974401 511.974401 511.974401c282.763462 0 511.974401-229.210939 511.974401-511.974401S794.686666 0 511.974401 0zM511.974401 972.700165c-254.451277 0-460.776961-206.274486-460.776961-460.776961 0-254.502475 206.274486-460.776961 460.776961-460.776961s460.776961 206.325684 460.776961 460.776961C972.751362 766.425679 766.425679 972.700165 511.974401 972.700165z"  ></path>'+
      ''+
      '<path d="M256.038398 256.038398l51.19744 0 0 511.974401-51.19744 0 0-511.974401Z"  ></path>'+
      ''+
      '<path d="M256.038398 716.815359l511.974401 0 0 51.19744-511.974401 0 0-51.19744Z"  ></path>'+
      ''+
      '<path d="M716.815359 358.433278l51.19744 0 0 409.579521-51.19744 0 0-409.579521Z"  ></path>'+
      ''+
      '<path d="M307.235838 358.433278l460.776961 0 0 51.19744-460.776961 0 0-51.19744Z"  ></path>'+
      ''+
      '<path d="M307.235838 256.038398l358.382081 0 0 51.19744-358.382081 0 0-51.19744Z"  ></path>'+
      ''+
      '<path d="M613.345333 274.162292l52.272586 0 0 84.270986-52.272586 0 0-84.270986Z"  ></path>'+
      ''+
      '<path d="M716.815359 256.038398l51.19744 0 0 51.19744-51.19744 0 0-51.19744Z"  ></path>'+
      ''+
      '<path d="M307.235838 512.025599l409.579521 0 0 51.19744-409.579521 0 0-51.19744Z"  ></path>'+
      ''+
      '<path d="M307.235838 614.420479l409.579521 0 0 51.19744-409.579521 0 0-51.19744Z"  ></path>'+
      ''+
      '<path d="M358.433278 277.643718l51.19744 0 0 80.789561-51.19744 0 0-80.789561Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-html" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M708.923077 0 114.806154 0C66.166154 0 59.076923 7.089231 59.076923 55.729231l0 912.541538C59.076923 1016.910769 66.166154 1024 114.806154 1024l794.387692 0c48.64 0 55.729231-7.089231 55.729231-55.729231L964.923077 256 708.923077 0zM295.384615 649.846154l-39.384615 0L256 551.384615l-118.153846 0 0 98.461538-39.384615 0 0-236.307692 39.384615 0L137.846154 512l118.153846 0 0-98.461538 39.384615 0L295.384615 649.846154zM512 452.923077l-78.769231 0 0 196.923077-39.384615 0 0-196.923077L315.076923 452.923077l0-39.384615 196.923077 0L512 452.923077zM748.307692 649.846154l-39.384615 0 0-186.092308L655.753846 649.846154 624.246154 649.846154l-53.169231-186.092308L571.076923 649.846154l-39.384615 0 0-236.307692 59.470769 0 48.836923 161.28 48.836923-161.28L748.307692 413.538462 748.307692 649.846154zM925.538462 649.846154 787.692308 649.846154l0-236.307692 39.384615 0 0 196.923077 98.461538 0L925.538462 649.846154zM795.017846 261.907692c-53.878154 0-92.002462-38.084923-92.002462-91.963077L703.015385 13.784615l248.162462 248.123077L795.017846 261.907692z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mysql" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M888.60738 750.781338c-48.849568-1.222851-86.709851 3.665483-118.464065 17.0974-9.159614 3.665483-23.816428 3.665483-25.038256 15.265682 4.888334 4.88731 5.497201 12.825097 9.772574 19.541055 7.327896 12.212136 20.149922 28.700669 31.754215 37.250392 12.822027 9.769504 25.648147 19.536962 39.07904 28.087709 23.815405 14.656815 50.685379 23.203468 73.888847 37.860283 13.433964 8.546653 26.865881 19.541055 40.299845 28.700669 6.719028 4.885264 10.990309 12.822027 19.541055 15.874549 0-0.608867 0-1.221828 0-1.830695-4.275373-5.497201-5.497201-13.434987-9.768481-19.541055-6.106068-6.106068-12.212136-11.604292-18.319228-17.71036-17.71036-23.812335-39.690978-44.575218-63.507406-61.671595-19.541055-13.434987-62.285578-31.754215-70.222341-54.347792 0 0-0.613984-0.60989-1.221828-1.218758 13.434987-1.221828 29.309536-6.107091 42.134633-9.772574 20.759813-5.493108 39.690978-4.27435 61.063751-9.768481 9.767458-2.444679 19.540032-5.497201 29.309536-8.550747 0-1.831718 0-3.662413 0-5.493108-10.991332-10.994402-18.928095-25.647123-30.531364-36.028565-31.141254-26.869974-65.338101-53.125965-100.754728-75.107605-18.932188-12.213159-43.357484-20.154016-63.507406-30.532387-7.327896-3.666506-19.542078-5.497201-23.812335-11.603269-10.994402-13.434987-17.10047-31.140231-25.038256-47.018873-17.706267-33.585933-34.80776-70.832232-50.072419-106.248859-10.990309-23.816428-17.705244-47.632857-31.140231-69.613474C541.15604 280.59363 472.764394 217.699184 367.734292 156.022473c-22.593578-12.822027-49.459458-18.319228-78.160127-25.034163-15.265682-0.61296-30.531364-1.831718-45.798069-2.444679-9.772574-4.275373-19.540032-15.874549-28.090778-21.37175-34.802644-21.98164-124.567064-69.610404-150.21521-6.715959-16.487509 39.690978 24.426319 78.768995 38.470173 98.92301 10.381441 14.043854 23.816428 29.918403 31.144324 45.797046 4.270257 10.378371 5.493108 21.37175 9.768481 32.363082 9.768481 26.864858 18.928095 56.787354 31.753191 81.826634 6.714935 12.821003 14.043854 26.25599 22.593578 37.85619 4.885264 6.719028 13.430894 9.772574 15.265682 20.762883-8.550747 12.212136-9.15859 30.531364-14.046924 45.798069-21.98164 69.000514-13.430894 154.48956 17.71036 205.170846 9.767458 15.265682 32.975019 48.854685 64.116273 36.028565 27.477818-10.990309 21.37175-45.797046 29.309536-76.329433 1.830695-7.327896 0.611937-12.212136 4.27435-17.096377 0 0.608867 0 1.221828 0 1.221828 8.550747 17.096377 17.0974 33.583886 25.035186 50.682309 18.932188 29.918403 51.904137 61.063751 79.381955 81.826634 14.656815 10.990309 26.261107 29.918403 44.579311 36.637432 0-0.61296 0-1.222851 0-1.834788-0.61296 0-0.61296 0-1.220804 0-3.666506-5.493108-9.159614-7.937786-14.043854-12.212136-10.994402-10.991332-23.207561-24.426319-31.754215-36.638455-25.647123-34.193777-48.241724-72.054059-68.391646-111.13617-9.769504-18.928095-18.319228-39.690978-26.25599-58.619072-3.666506-7.328919-3.666506-18.319228-9.772574-21.98164-9.159614 13.430894-22.590508 25.034163-29.309536 41.522696-11.600199 26.25599-12.822027 58.619072-17.0974 92.203982-2.444679 0.613984-1.221828 0-2.444679 1.221828-19.536962-4.88424-26.25599-25.034163-33.583886-42.134633-18.319228-43.35339-21.372773-112.967888-5.493108-163.036213 4.27435-12.825097 22.593578-53.125965 15.265682-65.338101-3.666506-11.604292-15.878642-18.319228-22.593578-27.478841-7.937786-11.604292-16.488533-26.257014-21.98164-39.08211-14.656815-34.193777-21.985734-72.054059-37.860283-106.251929-7.327896-15.874549-20.149922-32.363082-30.531364-47.01478-11.604292-16.488533-24.425296-28.091802-33.584909-47.632857-3.052522-6.715959-7.327896-17.706267-2.443655-25.035186 1.221828-4.88424 3.662413-6.714935 8.549723-7.937786 7.937786-6.719028 30.532387 1.831718 38.46915 5.493108 22.593578 9.159614 41.522696 17.709337 60.45386 30.531364 8.546653 6.107091 17.70729 17.71036 28.696576 20.762883 4.275373 0 8.550747 0 12.82612 0 19.541055 4.27435 41.522696 1.221828 59.8409 6.715959 32.363082 10.381441 61.672618 25.647123 87.932702 42.135656 79.991846 50.681286 145.938813 122.739439 190.518125 208.837352 7.324826 14.043854 10.377348 26.868951 17.0974 41.521672 12.821003 29.922497 28.700669 60.454884 41.521672 89.76442 12.821003 28.700669 25.034163 58.010205 43.35339 81.826634 9.159614 12.821003 45.798069 19.536962 62.285578 26.25599 12.212136 5.493108 31.144324 10.381441 42.134633 17.096377 20.759813 12.822027 41.522696 27.478841 61.063751 41.522696C856.241228 723.30352 886.772592 738.569202 888.60738 750.781338L888.60738 750.781338z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-css3" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M152.416 48.512l-34.368 171.936 699.744 0-21.888 111.04-700.192 0-33.888 171.904 699.68 0-39.008 196.064-282.016 93.408-244.416-93.408 16.736-85.056-171.904 0-40.896 206.336 404.224 154.688 466.016-154.688 153.76-772.256z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jquery" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M818.718125 747.844449c24.190959-13.047154 40.286542-34.269501 66.11479-42.496883-69.390393 102.360296-137.041166 182.977381-283.343253 193.608509-119.071909 8.65717-224.851071-38.507012-297.516044-89.723487-18.368346-12.9438-40.093137-26.698059-51.943023-37.780465-4.031826-3.765767-0.859577-14.899338-4.727675-18.890232-17.365506-17.897625-54.143131-48.504714-70.833255-75.550697-7.858992-12.728906-11.768021-32.244378-18.890232-47.225581-30.944779-65.112973-54.716182-183.989431-23.607674-273.898137 8.084119-23.382547 28.488845-46.672996 42.497906-66.115813 14.479783-20.107967 29.829376-37.176714 42.497906-61.388139-3.213181 51.29834-23.791869 83.440387-18.890232 151.111626 11.757788 162.285107 120.064516 285.226137 236.127905 354.176508 2.619664 1.565658 12.218276-2.210341 14.162558 0 7.930623 9.015328 26.738991 18.061354 56.670697 28.335349C596.66068 792.798291 737.487056 791.631722 818.718125 747.844449z"  ></path>'+
      ''+
      '<path d="M884.833939 502.281661c-33.861202 75.509764-102.125959 145.473209-236.127905 136.949069-179.191148-11.399631-355.803565-210.524784-278.615579-391.956973 7.091512-16.679891 21.960151-31.630395 33.05279-47.225581 10.417257-14.643512 20.077268-32.520671 37.780465-42.508139-77.095889 160.024623 61.429071 325.749062 184.17465 377.794415C698.878736 566.627155 838.662363 549.937031 884.833939 502.281661z"  ></path>'+
      ''+
      '<path d="M596.763011 171.712827c1.524726 135.864364 166.737512 237.826594 297.516044 170.001859-38.281885 98.749048-188.748828 101.522208-273.90837 28.335349-71.273277-61.265342-86.878696-175.537945-18.879999-250.28023C614.50714 139.550313 596.558349 153.129586 596.763011 171.712827z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-blog" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M509.278384 954.05462c-88.555115 0-178.188847-44.623452-178.188847-129.850612 0-84.952901 93.268694-178.191917 178.188847-178.191917 84.893546 0 178.134609 93.239017 178.134609 178.191917C687.41504 909.428098 597.805868 954.05462 509.278384 954.05462zM509.278384 689.968314c-60.209168 0-134.202946 74.021409-134.202946 134.235694 0 55.772919 69.139999 85.863688 134.202946 85.863688 65.03941 0 134.149732-30.090769 134.149732-85.863688C643.428116 763.989722 569.462992 689.968314 509.278384 689.968314z"  ></path>'+
      ''+
      '<path d="M314.974745 743.854164l-5.632553-4.879363C241.754624 680.206518 202.982724 595.452149 202.982724 506.45392c0-170.204621 138.476482-308.709758 308.651426-308.709758 170.204621 0 308.68315 138.505136 308.68315 308.709758 0 88.774113-38.633747 173.362699-105.941939 232.104374l-5.605946 4.882433-24.155302-27.652111 5.605946-4.90904c59.350572-51.749082 93.37717-126.272958 93.37717-204.425656 0-149.96161-122.001469-271.988663-271.961033-271.988663-149.956493 0-271.932379 122.027053-271.932379 271.988663 0 78.402397 34.168844 153.033726 93.742508 204.815555l5.630506 4.88141L314.974745 743.854164z"  ></path>'+
      ''+
      '<path d="M509.278384 954.05462c-88.555115 0-178.188847-44.623452-178.188847-129.850612 0-84.952901 93.268694-178.191917 178.188847-178.191917 84.893546 0 178.134609 93.239017 178.134609 178.191917C687.41504 909.428098 597.805868 954.05462 509.278384 954.05462zM509.278384 689.968314c-60.209168 0-134.202946 74.021409-134.202946 134.235694 0 55.772919 69.139999 85.863688 134.202946 85.863688 65.03941 0 134.149732-30.090769 134.149732-85.863688C643.428116 763.989722 569.462992 689.968314 509.278384 689.968314z"  ></path>'+
      ''+
      '<path d="M482.016172 643.485424l-4.851732-1.32934c-53.943158-14.450814-91.634394-63.567824-91.634394-119.397027 0-68.254796 55.496613-123.778016 123.749362-123.778016 68.228188 0 123.721731 55.52322 123.721731 123.778016 0 54.554101-36.580895 103.363081-88.941944 118.730822l-4.854802 1.415302-4.990909-0.833012c-8.877616-1.495124-15.921377-2.191006-22.157711-2.191006-7.489945 0-15.672702 0.889297-25.074276 2.662773L482.016172 643.485424zM509.278384 442.942381c-43.984878 0-79.763461 35.803144-79.763461 79.817699 0 34.084929 22.382849 64.926841 54.665647 75.604541 19.636161-3.246086 32.474166-3.330001 51.917936-0.530099 31.254325-11.231335 52.943339-41.823549 52.943339-75.074442C589.042868 478.747572 553.265308 442.942381 509.278384 442.942381z"  ></path>'+
      ''+
      '<path d="M739.194822 918.358928l-18.663972-39.822887 6.739825-3.164218c109.469448-51.36123 180.215093-162.300217 180.215093-282.693993l0-166.541006c0-172.145928-140.082128-312.230103-312.228057-312.230103L428.738196 113.906721c-172.143881 0-312.199403 140.084175-312.199403 312.230103l0 166.541006c0 120.227993 70.721084 231.110695 180.184392 282.471925l6.743918 3.187755-18.666019 39.826981-6.767455-3.189802C153.228163 856.403914 72.553916 729.877163 72.553916 592.67783l0-166.541006c0-196.412776 159.77355-356.19042 356.185303-356.19042l166.518492 0c196.4138 0 356.19042 159.777644 356.19042 356.19042l0 166.541006c0 137.365117-80.653781 263.946106-205.483807 322.520974L739.194822 918.358928z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-html5" viewBox="0 0 1050 1024">'+
      ''+
      '<path d="M662.133094 528.533238 650.067803 663.859659 533.786404 695.263857 533.522368 695.362583 417.270816 664.008897 409.854852 580.686063 305.030314 580.686063 319.634942 744.615605 533.494816 803.954798 533.641758 803.954798 533.751964 803.954798 533.988448 803.901991 747.618726 744.615605 776.304502 424.142637 395.824215 424.142637 386.305148 317.247139 785.421776 317.247139 785.80061 317.247139 795.126816 212.854242 272.184251 212.854242 300.355731 528.533238Z"  ></path>'+
      ''+
      '<path d="M116.680897 35.518565l75.840287 851.221812 340.585614 94.559283 341.497112-94.710816L950.639354 35.518565 116.680897 35.518565zM810.681973 815.682583 533.210117 892.624933l-276.71878-76.827552L194.856179 124.181812l677.601004 0L810.681973 815.682583z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fabuxinwen" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M895.814986 98.819891 925.295361 128.300266C928.931104 131.936008 928.907027 138.210335 925.188133 141.929229L578.792946 488.324416 601.004056 478.954541 511.583694 480.11796 543.997292 512.531559 545.160712 423.111196 535.790836 445.322307 882.186024 98.927119C886.060512 95.05263 892.027381 95.032285 895.814986 98.819891L895.814986 98.819891 895.814986 98.819891ZM941.069821 53.565057C912.219317 24.714553 865.73041 24.873065 836.93119 53.672285L490.536002 400.067472 481.335403 409.268072 481.166128 422.278583 480.002708 511.698946 479.575426 544.539827 512.416307 544.112544 601.836669 542.949124 614.847181 542.779849 624.04778 533.57925 970.442967 187.184063C999.077994 158.549036 999.257573 111.75281 970.550195 83.045432L941.069821 53.565057 941.069821 53.565057 941.069821 53.565057Z"  ></path>'+
      ''+
      '<path d="M641.907904 128 641.907904 128 255.571103 128C184.964017 128 128 185.551974 128 256.545933L128 767.454067C128 838.275174 185.551974 896 256.545933 896L767.454067 896C838.275174 896 896 838.65664 896 767.920019L896 384.953992 832 384.953992 832 767.920019C832 803.185498 803.053811 832 767.454067 832L256.545933 832C220.971148 832 192 803.001946 192 767.454067L192 256.545933C192 220.725174 220.483949 192 255.571103 192L641.907904 192 641.907904 128Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontphp" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M678.880263 231.770667c0 5.215792 4.227278 9.44307 9.445116 9.44307l170.025395 0L678.880263 61.745273 678.880263 231.770667z"  ></path>'+
      ''+
      '<path d="M300.381813 180.974771c3.347235-1.194198 6.164397-2.924609 8.454556-5.176906 2.286066-2.251274 4.031826-4.946662 5.226025-8.094352 1.195222-3.14769 1.792832-6.662747 1.792832-10.56052 0-3.553942-0.563842-6.777357-1.688455-9.679453-1.12973-2.910283-2.836605-5.383614-5.127787-7.436366-2.289136-2.044566-5.172813-3.622504-8.65717-4.710278-3.488451-1.094938-7.619538-1.639337-12.402471-1.639337l-13.222139 0 0 49.089022L288.797987 182.76658C293.171598 182.767604 297.030485 182.169993 300.381813 180.974771z"  ></path>'+
      ''+
      '<path d="M531.192619 180.974771c3.347235-1.194198 6.164397-2.924609 8.454556-5.176906 2.286066-2.251274 4.031826-4.946662 5.226025-8.094352 1.195222-3.14769 1.792832-6.662747 1.792832-10.56052 0-3.553942-0.563842-6.777357-1.688455-9.679453-1.12973-2.910283-2.836605-5.383614-5.127787-7.436366-2.289136-2.044566-5.172813-3.622504-8.65717-4.710278-3.488451-1.094938-7.619538-1.639337-12.402471-1.639337l-13.221116 0 0 49.089022 14.040784 0C523.983427 182.767604 527.842315 182.169993 531.192619 180.974771z"  ></path>'+
      ''+
      '<path d="M688.325379 269.556249c-20.833491 0-37.784558-16.947997-37.784558-37.785581L650.540821 61.745273 173.490821 61.745273c-4.330632 0-7.841595 3.51608-7.841595 7.842619l0 884.82524c0 4.334725 3.510964 7.841595 7.841595 7.841595l677.019381 0c4.329609 0 7.841595-3.50687 7.841595-7.841595L858.351797 269.556249 688.325379 269.556249zM480.152153 112.76425l39.250956 0c8.676613 0 16.350386 0.942465 23.013133 2.826372 6.658653 1.876744 12.260232 4.626367 16.805758 8.240685 4.544503 3.629667 7.995091 8.086166 10.352789 13.378705 2.355651 5.299703 3.5345 11.356652 3.5345 18.195408 0 6.968715-1.160429 13.409404-3.484358 19.321044s-5.774517 11.012821-10.349719 15.316847c-4.579295 4.304026-10.284227 7.6574-17.115819 10.04682-6.835685 2.38942-14.761192 3.583618-23.778566 3.583618l-12.811794 0 0 43.054585-25.417903 0L480.15113 112.76425zM360.646362 112.76425l25.215288 0 0 53.813626 45.50438 0 0-53.813626 25.214265 0 0 133.964084-25.214265 0 0-58.32436-45.50438 0 0 58.32436-25.215288 0L360.646362 112.76425zM249.340323 112.76425l39.250956 0c8.676613 0 16.350386 0.942465 23.01211 2.826372 6.659677 1.876744 12.260232 4.626367 16.806781 8.240685 4.544503 3.629667 7.995091 8.086166 10.352789 13.378705 2.355651 5.299703 3.5345 11.356652 3.5345 18.195408 0 6.968715-1.160429 13.409404-3.484358 19.321044s-5.774517 11.012821-10.349719 15.316847c-4.579295 4.304026-10.285251 7.6574-17.115819 10.04682-6.835685 2.38942-14.761192 3.583618-23.778566 3.583618l-12.812817 0 0 43.054585-25.416879 0L249.3393 112.76425zM820.566216 924.470169 203.433784 924.470169 203.433784 306.154795l617.132432 0L820.566216 924.470169z"  ></path>'+
      ''+
      '<path d="M541.934265 361.446076l52.013631 0 0 21.565155-52.013631 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M612.572068 361.446076l18.624173 0 0 21.565155-18.624173 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M439.743838 361.446076l83.565231 0 0 21.565155-83.565231 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 361.446076l83.932598 0 0 21.565155-83.932598 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M350.848205 361.446076l28.91761 0 0 21.565155-28.91761 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M398.389988 361.446076l22.729677 0 0 21.565155-22.729677 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M407.702074 409.478022l93.881181 0 0 21.565155-93.881181 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M302.755884 409.478022l86.320994 0 0 21.565155-86.320994 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 409.478022l35.839253 0 0 21.565155-35.839253 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M715.006042 409.478022l29.897937 0 0 21.565155-29.897937 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M520.207427 409.478022l86.97284 0 0 21.565155-86.97284 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M668.44561 409.478022l27.936259 0 0 21.565155-27.936259 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M625.804441 409.478022l24.015973 0 0 21.565155-24.015973 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 457.508945l74.620511 0 0 21.565155-74.620511 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M341.536119 457.508945l28.91761 0 0 21.565155-28.91761 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M589.536422 457.508945l17.643845 0 0 21.565155-17.643845 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M625.804441 457.508945l24.015973 0 0 21.565155-24.015973 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M668.44561 457.508945l37.248346 0 0 21.565155-37.248346 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M389.077901 457.508945l59.978023 0 0 21.565155-59.978023 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M510.895341 457.508945l60.016909 0 0 21.565155-60.016909 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M467.680097 457.508945l24.590048 0 0 21.565155-24.590048 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 505.540891l35.839253 0 0 21.565155-35.839253 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M356.668771 505.540891l23.097044 0 0 21.565155-23.097044 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M302.755884 505.540891l35.287691 0 0 21.565155-35.287691 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M551.245328 505.540891l61.32674 0 0 21.565155-61.32674 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M458.36801 505.540891l74.253144 0 0 21.565155-74.253144 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M398.389988 505.540891l41.35385 0 0 21.565155-41.35385 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M377.498168 553.572838l110.582561 0 0 21.565155-110.582561 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 553.572838l110.582561 0 0 21.565155-110.582561 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M520.207427 601.604784l21.725814 0 0 21.565155-21.725814 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M430.431751 601.604784l71.151503 0 0 21.565155-71.151503 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 601.604784l48.828079 0 0 21.565155-48.828079 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M315.742662 601.604784l52.443419 0 0 21.565155-52.443419 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M560.558437 601.604784l61.32674 0 0 21.565155-61.32674 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M386.811278 601.604784l24.996301 0 0 21.565155-24.996301 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M640.509351 601.604784l27.937283 0 0 21.565155-27.937283 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 649.635707l89.753163 0 0 21.565155-89.753163 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M551.245328 649.635707l117.219725 0 0 21.565155-117.219725 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M687.089226 649.635707l44.091194 0 0 21.565155-44.091194 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M407.702074 649.635707l79.583546 0 0 21.565155-79.583546 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M356.668771 649.635707l32.409131 0 0 21.565155-32.409131 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M505.909793 649.635707l26.711362 0 0 21.565155-26.711362 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M350.848205 697.668677l21.565155 0 0 21.564132-21.565155 0 0-21.564132Z"  ></path>'+
      ''+
      '<path d="M248.290411 697.668677l83.932598 0 0 21.564132-83.932598 0 0-21.564132Z"  ></path>'+
      ''+
      '<path d="M302.755884 745.6996l104.94619 0 0 21.565155-104.94619 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M426.32727 745.6996l32.041764 0 0 21.565155-32.041764 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 745.6996l35.839253 0 0 21.565155-35.839253 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M612.572068 745.6996l28.426423 0 0 21.565155-28.426423 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M476.993207 745.6996l116.954689 0 0 21.565155-116.954689 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M280.808012 793.731546l78.065983 0 0 21.565155-78.065983 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M377.498168 793.731546l39.515992 0 0 21.565155-39.515992 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 793.731546l13.891382 0 0 21.565155-13.891382 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M435.639357 793.731546l84.569094 0 0 21.565155-84.569094 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M538.8316 793.731546l19.826558 0 0 21.565155-19.826558 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M248.290411 841.762469l83.932598 0 0 21.565155-83.932598 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M621.884155 841.762469l50.972928 0 0 21.565155-50.972928 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M691.481256 841.762469l20.094664 0 0 21.565155-20.094664 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M350.848205 841.762469l200.397123 0 0 21.565155-200.397123 0 0-21.565155Z"  ></path>'+
      ''+
      '<path d="M569.8695 841.762469l33.389458 0 0 21.565155-33.389458 0 0-21.565155Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-nodejs" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 78.933333C500.48 78.933333 488.533333 81.92 478.72 87.466667L161.28 270.933333C140.8 282.88 128 305.066667 128 328.96L128 695.04C128 718.933333 140.8 741.12 161.28 753.066667L244.48 800.853333C285.013333 820.48 298.666667 820.906667 317.44 820.906667 377.173333 820.906667 411.733333 784.64 411.733333 721.493333L411.733333 360.106667C411.733333 354.986667 407.466667 350.72 402.346667 350.72L362.666667 350.72C357.12 350.72 352.853333 354.986667 352.853333 360.106667L352.853333 721.493333C352.853333 749.653333 323.84 777.386667 277.333333 753.92L189.866667 704C186.88 701.866667 185.173333 698.453333 185.173333 695.04L185.173333 328.96C185.173333 325.12 186.88 321.706667 189.866667 320L507.306667 136.96C509.866667 135.253333 514.133333 135.253333 516.693333 136.96L834.133333 320C837.12 321.706667 838.826667 325.12 838.826667 328.96L838.826667 695.04C838.826667 698.453333 837.12 701.866667 834.133333 704L516.693333 887.04C514.133333 888.746667 509.866667 888.746667 506.88 887.04L426.666667 838.4C423.253333 837.12 419.84 836.693333 417.706667 837.973333 395.093333 850.773333 390.826667 853.333333 369.92 859.733333 364.8 861.44 356.693333 864.426667 372.906667 873.386667L478.72 936.106667C488.96 942.08 500.053333 945.066667 512 945.066667 523.946667 945.066667 535.04 942.08 545.28 936.106667L862.72 753.066667C883.2 741.12 896 718.933333 896 695.04L896 328.96C896 305.066667 883.2 282.88 862.72 270.933333L545.28 87.466667C535.466667 81.92 523.946667 78.933333 512 78.933333M597.333333 341.333333C506.88 341.333333 452.693333 379.306667 452.693333 443.306667 452.693333 512 506.453333 532.053333 593.493333 540.586667 697.173333 550.826667 705.28 566.186667 705.28 586.666667 705.28 622.08 676.693333 637.013333 610.133333 637.013333 525.653333 637.013333 507.733333 616.106667 501.333333 574.293333 500.48 570.026667 496.64 566.613333 491.946667 566.613333L450.986667 566.613333C445.866667 566.613333 442.026667 570.453333 442.026667 576 442.026667 628.906667 471.04 692.906667 610.133333 692.906667 710.4 692.906667 768 653.226667 768 584.106667 768 515.413333 721.92 497.493333 624.213333 484.266667 525.653333 471.466667 515.84 464.64 515.84 441.6 515.84 422.4 524.373333 396.8 597.333333 396.8 661.333333 396.8 686.506667 410.88 696.32 454.826667 697.173333 459.093333 701.013333 462.08 705.28 462.08L746.666667 462.08C748.8 462.08 751.36 461.226667 753.066667 459.093333 754.773333 457.386667 756.053333 454.826667 755.2 452.266667 749.226667 376.32 698.88 341.333333 597.333333 341.333333Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wsp" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M173.320441 64.959477l0 17.833157 0 855.984379 0 17.833157 17.833157 0 641.98854 0 17.833157 0 0-17.833157L850.975295 332.454788l0-7.245008-5.015224-5.572926L596.296895 69.975724l-5.572926-5.015224-7.245008 0L191.153598 64.960501 173.320441 64.960501zM208.986755 100.625792l356.660072 0L565.646827 332.454788l0 17.833157 17.833157 0 231.828996 0 0 570.655911L208.986755 920.943856 208.986755 100.625792zM601.312118 126.260635l188.360995 188.360995L601.312118 314.621631 601.312118 126.260635zM339.249541 648.4016c12.279674 21.284769 27.424606 30.289863 46.662763 30.289863 28.652574 0 42.977837-16.372899 42.977837-57.305147L428.89014 435.147658l33.973766 0 0 189.513238c0 46.252417-21.284769 83.910085-74.086345 83.910085-33.972742 0-58.122769-14.734586-73.677023-42.977837L339.249541 648.4016zM534.087041 645.12702c19.238157 20.056801 45.844118 33.564443 74.086345 33.564443 35.20071 0 56.076156-17.600867 56.076156-43.797505 0-27.424606-19.646456-36.019355-45.024449-47.480384l-38.476313-16.781198c-24.967648-10.642384-54.438866-29.880541-54.438866-69.175499 0-40.931225 36.019355-71.221088 84.72873-71.221088 31.92613 0 60.169381 13.507642 78.998215 33.154098l-18.010189 22.103414c-16.372899-15.553231-36.429701-25.377994-60.989049-25.377994-30.289863 0-50.345642 15.144932-50.345642 39.293935 0 25.787316 23.73968 35.611056 44.61615 44.61615l38.476313 16.372899c31.107485 13.507642 55.257511 31.92613 55.257511 71.630411 0 42.569538-35.20071 76.54228-91.687212 76.54228-37.657668 0-70.402443-15.553231-93.733824-39.703257L534.087041 645.12702z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)