export default function parseTime(time) {
  return new Date(new Date(time).getTime() + 8 * 60 * 60 *  1000).toJSON()
          .replace("T", " ").replace(".000Z", "");
}