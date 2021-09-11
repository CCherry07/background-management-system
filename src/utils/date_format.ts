import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
const formatDefault = "YYYY-MM-DD HH:mm:ss";
export function formatUtc(utcString: string, format: string = formatDefault) {
  return dayjs.utc(utcString).utcOffset(8).format(format);
}
