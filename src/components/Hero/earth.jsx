const landColor = '#b1ca70';

const Earth = ({ className, style }) => (
  <svg viewBox='52.5 6 320 320' className={className} style={style}>
    <circle
      style={{ fill: 'var(--link-color)' }}
      cx='212.313'
      cy='166.222'
      r='159.149'
    />
    <path
      style={{ fill: landColor }}
      d='M258.318,50.313c-1.102,1.427-2.241,2.935-2.522,4.716c-0.459,2.907,1.452,5.602,3.26,7.924  c2.744,3.525,5.812,7.269,10.147,8.35c8.079,2.014,15.309-6.074,23.609-6.74c6.665-0.535,12.851,3.795,19.533,4.037  c7.581,0.275,11.497-6.948,13.03-14.377C313.199,41.932,299.033,31.62,283.4,23.802C277.307,31.689,264.41,42.428,258.318,50.313z'
    />
    <path
      style={{ fill: landColor }}
      d='M364.161,118.446c-2.941,8.971-11.209,6.597-21.931,7.422c-13.767,1.059-22.133-5.711-34.849-8.238  c-11.801-2.346-22.172,5.782-27.686,15.567c-4.094,7.264-10.509,23.341-5.121,30.762c2.575,3.546,6.439,5.894,10.198,8.147  c5.412,3.244,10.851,6.501,16.702,8.862c6.727,2.714,14.446,4.571,18.725,10.428c3.524,4.823,3.809,11.274,3.197,17.216  c-1.662,16.131-15.71,30.448-2.884,45.104c4.819,5.507,11.378,8.553,18.696,8.56c20.239-26.696,32.256-59.969,32.256-96.054  C371.462,149.575,368.902,133.528,364.161,118.446z'
    />
    <path
      style={{ fill: landColor }}
      d='M219.729,39.468c5.778,2.633,13.046,0.152,17.038-4.786c3.992-4.938,7.682-18.263,6.748-24.545  c-10.091-2.006-20.523-3.067-31.203-3.067c-2.834,0-5.649,0.077-8.447,0.223c1.907,5.841,5.3,10.909,6.324,16.976  C211.226,30.414,214.059,36.884,219.729,39.468z'
    />
    <path
      style={{ fill: landColor }}
      d='M86.971,122.562c7.74,8.149,16.255,15.561,25.393,22.103c2.508,1.796,5.217,3.723,6.213,6.643  c2.898,8.488-2.078,17.652,2.993,27.327c4.794,9.148,15.382,14.854,18.119,24.812c2.135,7.767-1.147,16.198,0.708,24.038  c2.249,9.508,11.43,15.926,14.746,25.117c2.11,5.847,1.659,12.313,3.2,18.335s6.395,12.162,12.585,11.596  c7.479-0.683,10.551-9.903,11.135-17.391c0.585-7.487,1.352-16.517,8.056-19.902c3.566-1.8,8.224-1.521,11.014-4.379  c4.637-4.749-0.027-12.528,0.132-19.164c0.17-7.073,5.988-12.545,11.368-17.14c6.779-5.79,13.558-11.581,20.336-17.371  c4.708-3.981,5.911-11.11,3.979-16.965c-1.931-5.855-6.491-10.528-11.621-13.947c-5.517-3.678-12.622-6.15-18.743-3.6  c-4.659,1.941-8.263,6.59-13.302,6.881c-4.647,0.268-8.656-3.421-10.885-7.508c-2.228-4.087-3.28-8.736-5.538-12.806  c-6.485-11.685-16.98-10.973-28.298-12.723c-11.426-1.767-23.047-7.102-31.562-14.909c-1.364-1.251-2.717-2.642-3.258-4.412  c-3.027-9.904,14.515-14.286,20.581-14.086c4.974,0.163,10.049,1.614,14.84,0.271c4.523-1.267,7.983-4.799,11.827-7.498  c10.879-7.639,26.778,2.777,28.882-17.886c0.824-8.093-2.308-16.007-5.381-23.54c-4.455-10.922-8.463-21.281-11.388-32.514  C127.837,23.413,90.31,54.281,69.872,95.181c5.441,5.856,3.847,3.12,6.129,10.79C77.91,112.387,82.361,117.709,86.971,122.562z'
    />
  </svg>
);

export default Earth;
