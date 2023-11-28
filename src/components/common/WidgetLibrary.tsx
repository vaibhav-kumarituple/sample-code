import StatusWidget from "@/components/logs/notification/widgets/StatusWidget";
import NotificationDetailsWidget from "../logs/notification/widgets/NotificationDetailsWidget";
import EditValueWidget from "@/components/configurations/widget/EditValueWidget";
import EditConstraintWidget from "../configurations/widget/EditConstraintWidget";
import ErrorLogsDetailWidget from "@/components/logs/error-logs/widgets/ErrorLogsDeatilWidget";
import EditUserStatusIcon from "@/components/user-management/widgets/EditUserStatusWidget";
import QuestionStatusWidget from "@/components/question/ques/view/widgets/StatusWidget";
import UserStatusWidget from "@/components/user-management/widgets/UserStatusWidget";
import AssignRoleToUserWidget from "@/components/user-management/widgets/AssignRoleToUserWidget";
import AuditChangeWidget from "@/components/logs/audit-logs/widgets/AuditChangeWidget";
import AuditLogDetailWidget from "@/components/logs/audit-logs/widgets/AuditLogDetailWidget";
import QuestionPaperStatusWidget from "@/components/question/quesPaper/widgets/StatusWidget";
import QuestionPaperDetailWidget from "@/components/question/quesPaper/widgets/QuestionPaperDetailWidget";
import QuestionOptionsWidget from "@/components/question/ques/view/widgets/QuestionOptionsWidget";
import StudentsInBatchWidget from "../batch/widgets/StudentsInBatch";
import EditStudentStatusWidget from "@/components/student/widgets/EditStudentStatusWidget";
import EditStudentWidget from "../student/widgets/EditStudentWidget";
import AssignBatchWidget from "../student/widgets/AssignBatchWidget";
import EditProfileImgWidget from "../student/widgets/EditProfileImgWidget";
import StudentDetailWidget from "../student/widgets/StudentDetailWidget";
import AssignStudentsWidget from "../batch/widgets/AssignStudentsWidget";
import BatchOptionsWidget from "../batch/widgets/BatchOptions";
import EditPermissionWidget from "../permissions/widgets/EditPermissionWidget";
import DeletePermissionWidget from "../permissions/widgets/DeletePermissionWidget";
import EditRoleWidget from "../roles/EditRoleWidget";
import DeleteRoleWidget from "../roles/DeleteRoleWidget";
import EditRoleStatusWidget from "../roles/EditRoleStatusWidget";
import RemoveQuestionButtonWidget from "../question/ques/view/DeleteQuestionButtonWidget";
import QuesPaperDeleteWidget from "../question/quesPaper/view/QuesPaperDeleteWidget";

const widgets: any = {
  statusWidget: (value: string, rowData: any) => {
    return <StatusWidget value={value} rowData={rowData} />;
  },
  questionStatusWidget: (value: string, rowData: any) => {
    return <QuestionStatusWidget value={value} rowData={rowData} />;
  },
  userStatusWidget: (value: string, rowData: any) => {
    return <UserStatusWidget value={value} rowData={rowData} />;
  },

  notificationDetails: (value: string, rowData?: any) => {
    return <NotificationDetailsWidget id={rowData?._id} rowData={rowData} />;
  },
  editConfigValue: (value: string, rowData?: any) => {
    return <EditValueWidget rowData={rowData} />;
  },
  editConfigConstraint: (value: string, rowData?: any) => {
    return <EditConstraintWidget rowData={rowData} />;
  },
  errorLogdetails: (value: string, rowData?: any) => {
    return <ErrorLogsDetailWidget id={rowData?._id} rowData={rowData} />;
  },
  auditLogDetails: (value: string, rowData?: any) => {
    return <AuditLogDetailWidget id={rowData?._id} rowData={rowData} />;
  },

  editUserStatus: (value: string, rowData?: any) => {
    return <EditUserStatusIcon rowData={rowData} />;
  },
  assignRoleToUser: (value: string, rowData?: any) => {
    return <AssignRoleToUserWidget rowData={rowData} />;
  },
  auditChange: (value: string, rowData?: any) => {
    return <AuditChangeWidget value={value} rowData={rowData} />;
  },
  questionPaperStatus: (value: string, rowData?: any) => {
    return <QuestionPaperStatusWidget value={value} rowData={rowData} />;
  },

  questionPaperDetails: (value: string, rowData?: any) => {
    return <QuestionPaperDetailWidget rowData={rowData} />;
  },
  quesPaperDelete: (value: string, rowData?: any) => {
    return <QuesPaperDeleteWidget rowData={rowData} />;
  },
  questionOptionsWidget: (value: string, rowData?: any) => {
    return <QuestionOptionsWidget id={rowData?._id} rowData={rowData} />;
  },
  deleteQuestion: (value: string, rowData?: any) => {
    return <RemoveQuestionButtonWidget rowData={rowData} />;
  },
  editPermission: (value: string, rowData?: any) => {
    return <EditPermissionWidget rowData={rowData} />;
  },
  deletePermission: (value: string, rowData?: any) => {
    return <DeletePermissionWidget rowData={rowData} />;
  },
  editRole: (value: string, rowData?: any) => {
    return <EditRoleWidget rowData={rowData} />;
  },
  deleteRole: (value: string, rowData?: any) => {
    return <DeleteRoleWidget rowData={rowData} />;
  },
  editRoleStatus: (value: string, rowData?: any) => {
    return <EditRoleStatusWidget rowData={rowData} />;
  },
  studentsInBatchDetails: (value: string, rowData?: any) => {
    return <StudentsInBatchWidget id={rowData?._id} rowData={rowData} />;
  },
  editStudentDetails: (value: string, rowData?: any) => {
    return <EditStudentWidget rowData={rowData} />;
  },
  assignBatch: (value: string, rowData?: any) => {
    return <AssignBatchWidget rowData={rowData} />;
  },
  editProfileImg: (value: string, rowData?: any) => {
    return <EditProfileImgWidget rowData={rowData} />;
  },
  editStudentStatus: (value: string, rowData?: any) => {
    return <EditStudentStatusWidget rowData={rowData} />;
  },
  studentDetails: (value: string, rowData?: any) => {
    return <StudentDetailWidget id={rowData?._id} rowData={rowData} />;
  },
  assignStudentsToBatch: (value: string, rowData?: any) => {
    return <AssignStudentsWidget id={rowData?._id} rowData={rowData} />;
  },
  batchOptions: (value: string, rowData?: any) => {
    return <BatchOptionsWidget id={rowData?._id} rowData={rowData} />;
  },
};
export default function WidgetLibrary({
  widgetName,
  value,
  rowData,
}: {
  widgetName: string;
  value: string;
  rowData?: any;
}) {
  return widgets[widgetName](value, rowData);
}
