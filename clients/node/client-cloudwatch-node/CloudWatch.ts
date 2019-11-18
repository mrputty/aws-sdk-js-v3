import { CloudWatchClient } from "./CloudWatchClient";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { DashboardInvalidInputError } from "./types/DashboardInvalidInputError";
import { DashboardNotFoundError } from "./types/DashboardNotFoundError";
import { DeleteAlarmsInput } from "./types/DeleteAlarmsInput";
import { DeleteAlarmsOutput } from "./types/DeleteAlarmsOutput";
import { DeleteAnomalyDetectorInput } from "./types/DeleteAnomalyDetectorInput";
import { DeleteAnomalyDetectorOutput } from "./types/DeleteAnomalyDetectorOutput";
import { DeleteDashboardsInput } from "./types/DeleteDashboardsInput";
import { DeleteDashboardsOutput } from "./types/DeleteDashboardsOutput";
import { DescribeAlarmHistoryInput } from "./types/DescribeAlarmHistoryInput";
import { DescribeAlarmHistoryOutput } from "./types/DescribeAlarmHistoryOutput";
import { DescribeAlarmsForMetricInput } from "./types/DescribeAlarmsForMetricInput";
import { DescribeAlarmsForMetricOutput } from "./types/DescribeAlarmsForMetricOutput";
import { DescribeAlarmsInput } from "./types/DescribeAlarmsInput";
import { DescribeAlarmsOutput } from "./types/DescribeAlarmsOutput";
import { DescribeAnomalyDetectorsInput } from "./types/DescribeAnomalyDetectorsInput";
import { DescribeAnomalyDetectorsOutput } from "./types/DescribeAnomalyDetectorsOutput";
import { DisableAlarmActionsInput } from "./types/DisableAlarmActionsInput";
import { DisableAlarmActionsOutput } from "./types/DisableAlarmActionsOutput";
import { EnableAlarmActionsInput } from "./types/EnableAlarmActionsInput";
import { EnableAlarmActionsOutput } from "./types/EnableAlarmActionsOutput";
import { GetDashboardInput } from "./types/GetDashboardInput";
import { GetDashboardOutput } from "./types/GetDashboardOutput";
import { GetMetricDataInput } from "./types/GetMetricDataInput";
import { GetMetricDataOutput } from "./types/GetMetricDataOutput";
import { GetMetricStatisticsInput } from "./types/GetMetricStatisticsInput";
import { GetMetricStatisticsOutput } from "./types/GetMetricStatisticsOutput";
import { GetMetricWidgetImageInput } from "./types/GetMetricWidgetImageInput";
import { GetMetricWidgetImageOutput } from "./types/GetMetricWidgetImageOutput";
import { InternalServiceFault } from "./types/InternalServiceFault";
import { InvalidFormatFault } from "./types/InvalidFormatFault";
import { InvalidNextToken } from "./types/InvalidNextToken";
import { InvalidParameterCombinationException } from "./types/InvalidParameterCombinationException";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { LimitExceededException } from "./types/LimitExceededException";
import { LimitExceededFault } from "./types/LimitExceededFault";
import { ListDashboardsInput } from "./types/ListDashboardsInput";
import { ListDashboardsOutput } from "./types/ListDashboardsOutput";
import { ListMetricsInput } from "./types/ListMetricsInput";
import { ListMetricsOutput } from "./types/ListMetricsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MissingRequiredParameterException } from "./types/MissingRequiredParameterException";
import { PutAnomalyDetectorInput } from "./types/PutAnomalyDetectorInput";
import { PutAnomalyDetectorOutput } from "./types/PutAnomalyDetectorOutput";
import { PutDashboardInput } from "./types/PutDashboardInput";
import { PutDashboardOutput } from "./types/PutDashboardOutput";
import { PutMetricAlarmInput } from "./types/PutMetricAlarmInput";
import { PutMetricAlarmOutput } from "./types/PutMetricAlarmOutput";
import { PutMetricDataInput } from "./types/PutMetricDataInput";
import { PutMetricDataOutput } from "./types/PutMetricDataOutput";
import { ResourceNotFound } from "./types/ResourceNotFound";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { SetAlarmStateInput } from "./types/SetAlarmStateInput";
import { SetAlarmStateOutput } from "./types/SetAlarmStateOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { DeleteAlarmsCommand } from "./commands/DeleteAlarmsCommand";
import { DeleteAnomalyDetectorCommand } from "./commands/DeleteAnomalyDetectorCommand";
import { DeleteDashboardsCommand } from "./commands/DeleteDashboardsCommand";
import { DescribeAlarmHistoryCommand } from "./commands/DescribeAlarmHistoryCommand";
import { DescribeAlarmsCommand } from "./commands/DescribeAlarmsCommand";
import { DescribeAlarmsForMetricCommand } from "./commands/DescribeAlarmsForMetricCommand";
import { DescribeAnomalyDetectorsCommand } from "./commands/DescribeAnomalyDetectorsCommand";
import { DisableAlarmActionsCommand } from "./commands/DisableAlarmActionsCommand";
import { EnableAlarmActionsCommand } from "./commands/EnableAlarmActionsCommand";
import { GetDashboardCommand } from "./commands/GetDashboardCommand";
import { GetMetricDataCommand } from "./commands/GetMetricDataCommand";
import { GetMetricStatisticsCommand } from "./commands/GetMetricStatisticsCommand";
import { GetMetricWidgetImageCommand } from "./commands/GetMetricWidgetImageCommand";
import { ListDashboardsCommand } from "./commands/ListDashboardsCommand";
import { ListMetricsCommand } from "./commands/ListMetricsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutAnomalyDetectorCommand } from "./commands/PutAnomalyDetectorCommand";
import { PutDashboardCommand } from "./commands/PutDashboardCommand";
import { PutMetricAlarmCommand } from "./commands/PutMetricAlarmCommand";
import { PutMetricDataCommand } from "./commands/PutMetricDataCommand";
import { SetAlarmStateCommand } from "./commands/SetAlarmStateCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class CloudWatch extends CloudWatchClient {
  /**
   * <p>Deletes the specified alarms. In the event of an error, no alarms are deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>The named resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAlarms(args: DeleteAlarmsInput): Promise<DeleteAlarmsOutput>;
  public deleteAlarms(
    args: DeleteAlarmsInput,
    cb: (err: any, data?: DeleteAlarmsOutput) => void
  ): void;
  public deleteAlarms(
    args: DeleteAlarmsInput,
    cb?: (err: any, data?: DeleteAlarmsOutput) => void
  ): Promise<DeleteAlarmsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAlarmsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified anomaly detection model from your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The named resource does not exist.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {MissingRequiredParameterException} <p>An input parameter that is required is missing.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorInput
  ): Promise<DeleteAnomalyDetectorOutput>;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorInput,
    cb: (err: any, data?: DeleteAnomalyDetectorOutput) => void
  ): void;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorInput,
    cb?: (err: any, data?: DeleteAnomalyDetectorOutput) => void
  ): Promise<DeleteAnomalyDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAnomalyDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes all dashboards that you specify. You may specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {DashboardNotFoundError} <p>The specified dashboard does not exist.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDashboards(
    args: DeleteDashboardsInput
  ): Promise<DeleteDashboardsOutput>;
  public deleteDashboards(
    args: DeleteDashboardsInput,
    cb: (err: any, data?: DeleteDashboardsOutput) => void
  ): void;
  public deleteDashboards(
    args: DeleteDashboardsInput,
    cb?: (err: any, data?: DeleteDashboardsOutput) => void
  ): Promise<DeleteDashboardsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDashboardsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for all alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The next token specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAlarmHistory(
    args: DescribeAlarmHistoryInput
  ): Promise<DescribeAlarmHistoryOutput>;
  public describeAlarmHistory(
    args: DescribeAlarmHistoryInput,
    cb: (err: any, data?: DescribeAlarmHistoryOutput) => void
  ): void;
  public describeAlarmHistory(
    args: DescribeAlarmHistoryInput,
    cb?: (err: any, data?: DescribeAlarmHistoryOutput) => void
  ): Promise<DescribeAlarmHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAlarmHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the specified alarms. If no alarms are specified, all alarms are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The next token specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAlarms(
    args: DescribeAlarmsInput
  ): Promise<DescribeAlarmsOutput>;
  public describeAlarms(
    args: DescribeAlarmsInput,
    cb: (err: any, data?: DescribeAlarmsOutput) => void
  ): void;
  public describeAlarms(
    args: DescribeAlarmsInput,
    cb?: (err: any, data?: DescribeAlarmsOutput) => void
  ): Promise<DescribeAlarmsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAlarmsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAlarmsForMetric(
    args: DescribeAlarmsForMetricInput
  ): Promise<DescribeAlarmsForMetricOutput>;
  public describeAlarmsForMetric(
    args: DescribeAlarmsForMetricInput,
    cb: (err: any, data?: DescribeAlarmsForMetricOutput) => void
  ): void;
  public describeAlarmsForMetric(
    args: DescribeAlarmsForMetricInput,
    cb?: (err: any, data?: DescribeAlarmsForMetricOutput) => void
  ): Promise<DescribeAlarmsForMetricOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAlarmsForMetricCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the anomaly detection models that you have created in your account. You can list all models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The next token specified is invalid.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsInput
  ): Promise<DescribeAnomalyDetectorsOutput>;
  public describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsInput,
    cb: (err: any, data?: DescribeAnomalyDetectorsOutput) => void
  ): void;
  public describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsInput,
    cb?: (err: any, data?: DescribeAnomalyDetectorsOutput) => void
  ): Promise<DescribeAnomalyDetectorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAnomalyDetectorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableAlarmActions(
    args: DisableAlarmActionsInput
  ): Promise<DisableAlarmActionsOutput>;
  public disableAlarmActions(
    args: DisableAlarmActionsInput,
    cb: (err: any, data?: DisableAlarmActionsOutput) => void
  ): void;
  public disableAlarmActions(
    args: DisableAlarmActionsInput,
    cb?: (err: any, data?: DisableAlarmActionsOutput) => void
  ): Promise<DisableAlarmActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableAlarmActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the actions for the specified alarms.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableAlarmActions(
    args: EnableAlarmActionsInput
  ): Promise<EnableAlarmActionsOutput>;
  public enableAlarmActions(
    args: EnableAlarmActionsInput,
    cb: (err: any, data?: EnableAlarmActionsOutput) => void
  ): void;
  public enableAlarmActions(
    args: EnableAlarmActionsInput,
    cb?: (err: any, data?: EnableAlarmActionsOutput) => void
  ): Promise<EnableAlarmActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableAlarmActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {DashboardNotFoundError} <p>The specified dashboard does not exist.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDashboard(args: GetDashboardInput): Promise<GetDashboardOutput>;
  public getDashboard(
    args: GetDashboardInput,
    cb: (err: any, data?: GetDashboardOutput) => void
  ): void;
  public getDashboard(
    args: GetDashboardInput,
    cb?: (err: any, data?: GetDashboardOutput) => void
  ): Promise<GetDashboardOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDashboardCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>You can use the <code>GetMetricData</code> API to retrieve as many as 100 different metrics in a single request, with a total of as many as 100,800 datapoints. You can also optionally perform math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextToken} <p>The next token specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMetricData(args: GetMetricDataInput): Promise<GetMetricDataOutput>;
  public getMetricData(
    args: GetMetricDataInput,
    cb: (err: any, data?: GetMetricDataOutput) => void
  ): void;
  public getMetricData(
    args: GetMetricDataInput,
    cb?: (err: any, data?: GetMetricDataOutput) => void
  ): Promise<GetMetricDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMetricDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by AWS services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {MissingRequiredParameterException} <p>An input parameter that is required is missing.</p>
   *   - {InvalidParameterCombinationException} <p>Parameters were used together that cannot be used together.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMetricStatistics(
    args: GetMetricStatisticsInput
  ): Promise<GetMetricStatisticsOutput>;
  public getMetricStatistics(
    args: GetMetricStatisticsInput,
    cb: (err: any, data?: GetMetricStatisticsOutput) => void
  ): void;
  public getMetricStatistics(
    args: GetMetricStatisticsInput,
    cb?: (err: any, data?: GetMetricStatisticsOutput) => void
  ): Promise<GetMetricStatisticsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMetricStatisticsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMetricWidgetImage(
    args: GetMetricWidgetImageInput
  ): Promise<GetMetricWidgetImageOutput>;
  public getMetricWidgetImage(
    args: GetMetricWidgetImageInput,
    cb: (err: any, data?: GetMetricWidgetImageOutput) => void
  ): void;
  public getMetricWidgetImage(
    args: GetMetricWidgetImageInput,
    cb?: (err: any, data?: GetMetricWidgetImageOutput) => void
  ): Promise<GetMetricWidgetImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMetricWidgetImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDashboards(
    args: ListDashboardsInput
  ): Promise<ListDashboardsOutput>;
  public listDashboards(
    args: ListDashboardsInput,
    cb: (err: any, data?: ListDashboardsOutput) => void
  ): void;
  public listDashboards(
    args: ListDashboardsInput,
    cb?: (err: any, data?: ListDashboardsOutput) => void
  ): Promise<ListDashboardsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDashboardsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the specified metrics. You can use the returned metrics with <a>GetMetricData</a> or <a>GetMetricStatistics</a> to obtain statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to fifteen minutes before the metric appears. Statistics about the metric, however, are available sooner using <a>GetMetricData</a> or <a>GetMetricStatistics</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMetrics(args: ListMetricsInput): Promise<ListMetricsOutput>;
  public listMetrics(
    args: ListMetricsInput,
    cb: (err: any, data?: ListMetricsOutput) => void
  ): void;
  public listMetrics(
    args: ListMetricsInput,
    cb?: (err: any, data?: ListMetricsOutput) => void
  ): Promise<ListMetricsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMetricsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays the tags associated with a CloudWatch resource. Alarms support tagging.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {ResourceNotFoundException} <p>The named resource does not exist.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The operation exceeded one or more limits.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {MissingRequiredParameterException} <p>An input parameter that is required is missing.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAnomalyDetector(
    args: PutAnomalyDetectorInput
  ): Promise<PutAnomalyDetectorOutput>;
  public putAnomalyDetector(
    args: PutAnomalyDetectorInput,
    cb: (err: any, data?: PutAnomalyDetectorOutput) => void
  ): void;
  public putAnomalyDetector(
    args: PutAnomalyDetectorInput,
    cb?: (err: any, data?: PutAnomalyDetectorOutput) => void
  ): Promise<PutAnomalyDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAnomalyDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DashboardInvalidInputError} <p>Some part of the dashboard data is invalid.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDashboard(args: PutDashboardInput): Promise<PutDashboardOutput>;
  public putDashboard(
    args: PutDashboardInput,
    cb: (err: any, data?: PutDashboardOutput) => void
  ): void;
  public putDashboard(
    args: PutDashboardInput,
    cb?: (err: any, data?: PutDashboardOutput) => void
  ): Promise<PutDashboardOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDashboardCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates an alarm and associates it with the specified metric, metric math expression, or anomaly detection model.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p> <code>iam:CreateServiceLinkedRole</code> for all alarms with EC2 actions</p> </li> <li> <p> <code>ec2:DescribeInstanceStatus</code> and <code>ec2:DescribeInstances</code> for all alarms on EC2 instance status metrics</p> </li> <li> <p> <code>ec2:StopInstances</code> for alarms with stop actions</p> </li> <li> <p> <code>ec2:TerminateInstances</code> for alarms with terminate actions</p> </li> <li> <p>No specific permissions are needed for alarms with recover actions</p> </li> </ul> <p>If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm, but the stop or terminate actions are not performed. However, if you are later granted the required permissions, the alarm actions that you created earlier are performed.</p> <p>If you are using an IAM role (for example, an EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies.</p> <p>If you are using temporary security credentials granted using AWS STS, you cannot stop or terminate an EC2 instance using alarm actions.</p> <p>The first time you create an alarm in the AWS Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked role is called <code>AWSServiceRoleForCloudWatchEvents</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">AWS service-linked role</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededFault} <p>The quota for alarms for this customer has already been reached.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putMetricAlarm(
    args: PutMetricAlarmInput
  ): Promise<PutMetricAlarmOutput>;
  public putMetricAlarm(
    args: PutMetricAlarmInput,
    cb: (err: any, data?: PutMetricAlarmOutput) => void
  ): void;
  public putMetricAlarm(
    args: PutMetricAlarmInput,
    cb?: (err: any, data?: PutMetricAlarmOutput) => void
  ): Promise<PutMetricAlarmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutMetricAlarmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a>ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 40 KB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 20 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 10 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a>GetMetricData</a> or <a>GetMetricStatistics</a> from the time they are submitted.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {MissingRequiredParameterException} <p>An input parameter that is required is missing.</p>
   *   - {InvalidParameterCombinationException} <p>Parameters were used together that cannot be used together.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putMetricData(args: PutMetricDataInput): Promise<PutMetricDataOutput>;
  public putMetricData(
    args: PutMetricDataInput,
    cb: (err: any, data?: PutMetricDataOutput) => void
  ): void;
  public putMetricData(
    args: PutMetricDataInput,
    cb?: (err: any, data?: PutMetricDataOutput) => void
  ): Promise<PutMetricDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutMetricDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a>DescribeAlarmHistory</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>The named resource does not exist.</p>
   *   - {InvalidFormatFault} <p>Data was not syntactically valid JSON.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setAlarmState(args: SetAlarmStateInput): Promise<SetAlarmStateOutput>;
  public setAlarmState(
    args: SetAlarmStateInput,
    cb: (err: any, data?: SetAlarmStateOutput) => void
  ): void;
  public setAlarmState(
    args: SetAlarmStateInput,
    cb?: (err: any, data?: SetAlarmStateOutput) => void
  ): Promise<SetAlarmStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetAlarmStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. In CloudWatch, alarms can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {ResourceNotFoundException} <p>The named resource does not exist.</p>
   *   - {ConcurrentModificationException} <p>More than one process tried to modify a resource at the same time.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of an input parameter is bad or out-of-range.</p>
   *   - {ResourceNotFoundException} <p>The named resource does not exist.</p>
   *   - {ConcurrentModificationException} <p>More than one process tried to modify a resource at the same time.</p>
   *   - {InternalServiceFault} <p>Request processing has failed due to some unknown error, exception, or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}