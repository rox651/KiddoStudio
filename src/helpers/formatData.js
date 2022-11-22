export const formatData = ({ repeat = 3, data = [] }) => {
   return data.map((item, idx) => {
      return !idx || !(idx % repeat) ? { ...item, isView: true } : { ...item, isView: false };
   });
};
