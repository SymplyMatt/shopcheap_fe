import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setLoggedInUser } from "../../redux/states/app";
import { useState } from "react";
import { apiRequest } from "../../utils/utils";
import utils from "../../utils/utils";

const ProfileForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loggedInUser } = useSelector((state: RootState) => state.app);
  
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Profile fields
  const [formData, setFormData] = useState({
    firstname: loggedInUser?.firstname || "",
    lastname: loggedInUser?.lastname || "",
    email: loggedInUser?.email || "",
    phone: loggedInUser?.phone || "",
  });

  // Password change
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Email change
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [emailChangeData, setEmailChangeData] = useState({
    newEmail: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailChangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailChangeData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    if (!loggedInUser?.id) {
      setError("User not found");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const updateData: any = {};
      if (formData.firstname !== loggedInUser.firstname) updateData.firstname = formData.firstname;
      if (formData.lastname !== loggedInUser.lastname) updateData.lastname = formData.lastname;
      if (formData.phone !== loggedInUser.phone) updateData.phone = formData.phone;

      if (Object.keys(updateData).length === 0) {
        setIsEditing(false);
        setLoading(false);
        return;
      }

      const response = await apiRequest(`users/${loggedInUser.id}`, 'PUT', updateData);
      
      if (response.status === 200 && response.data?.user) {
        dispatch(setLoggedInUser({ ...response.data.user, token: loggedInUser.token }));
        utils.saveUserWithExpiry(response.data.user, loggedInUser.token);
        utils.createSuccessNotification("Profile updated successfully", 3000);
        setIsEditing(false);
      } else {
        setError(response.data?.message || "Failed to update profile");
        utils.createErrorNotification(response.data?.message || "Failed to update profile", 3000);
      }
    } catch (err) {
      setError("An error occurred while updating profile");
      utils.createErrorNotification("An error occurred while updating profile", 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (!loggedInUser?.id) {
      setError("User not found");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords do not match");
      utils.createErrorNotification("New passwords do not match", 3000);
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      utils.createErrorNotification("New password must be at least 6 characters", 3000);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await apiRequest(`users/${loggedInUser.id}/password`, 'PUT', {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });

      if (response.status === 200) {
        utils.createSuccessNotification("Password changed successfully", 3000);
        setShowPasswordChange(false);
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
      } else {
        setError(response.data?.message || "Failed to change password");
        utils.createErrorNotification(response.data?.message || "Failed to change password", 3000);
      }
    } catch (err) {
      setError("An error occurred while changing password");
      utils.createErrorNotification("An error occurred while changing password", 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeEmail = async () => {
    if (!loggedInUser?.id) {
      setError("User not found");
      return;
    }

    if (!utils.isValidEmail(emailChangeData.newEmail)) {
      setError("Please enter a valid email address");
      utils.createErrorNotification("Please enter a valid email address", 3000);
      return;
    }

    if (emailChangeData.newEmail === loggedInUser.email) {
      setError("New email must be different from current email");
      utils.createErrorNotification("New email must be different from current email", 3000);
      return;
    }

    setLoading(true);
    setError("");

    try {
      // First validate password by attempting login
      const loginResponse = await apiRequest("users/login", 'POST', {
        identifier: loggedInUser.email,
        password: emailChangeData.password,
      });

      if (loginResponse.status !== 200) {
        setError("Password is incorrect");
        utils.createErrorNotification("Password is incorrect", 3000);
        setLoading(false);
        return;
      }

      // If password is valid, update email
      const updateResponse = await apiRequest(`users/${loggedInUser.id}`, 'PUT', {
        email: emailChangeData.newEmail,
      });

      if (updateResponse.status === 200 && updateResponse.data?.user) {
        dispatch(setLoggedInUser({ ...updateResponse.data.user, token: loggedInUser.token }));
        utils.saveUserWithExpiry(updateResponse.data.user, loggedInUser.token);
        utils.createSuccessNotification("Email updated successfully", 3000);
        setShowEmailChange(false);
        setEmailChangeData({ newEmail: "", password: "" });
        setFormData(prev => ({ ...prev, email: updateResponse.data.user.email }));
      } else {
        setError(updateResponse.data?.message || "Failed to update email");
        utils.createErrorNotification(updateResponse.data?.message || "Failed to update email", 3000);
      }
    } catch (err) {
      setError("An error occurred while updating email");
      utils.createErrorNotification("An error occurred while updating email", 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstname: loggedInUser?.firstname || "",
      lastname: loggedInUser?.lastname || "",
      email: loggedInUser?.email || "",
      phone: loggedInUser?.phone || "",
    });
    setIsEditing(false);
    setError("");
  };

  return (
    <div className="tmd:col-span-3 h-full flex flex-col justify-start gap-[20px] p-[20px] tmd:p-[24px] border-b border-[#D6D6D5]">
      <div className="flex items-center justify-between">
        <div className="text-[#141511] font-medium text-[24px]">Profile Details</div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="h-[40px] px-[16px] text-[#141511] font-semibold border border-[#D6D6D5] cursor-pointer flex items-center justify-center hover:bg-[#F3F3F3] transition-colors"
          >
            EDIT
          </button>
        ) : (
          <div className="flex gap-[8px]">
            <button
              onClick={handleCancel}
              className="h-[40px] px-[16px] text-[#141511] font-semibold border border-[#D6D6D5] cursor-pointer flex items-center justify-center hover:bg-[#F3F3F3] transition-colors"
            >
              CANCEL
            </button>
            <button
              onClick={handleSaveProfile}
              disabled={loading}
              className="h-[40px] px-[16px] text-white font-semibold bg-[#141511] cursor-pointer flex items-center justify-center hover:bg-[#2a2a28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "SAVING..." : "SAVE"}
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="text-[#BD3322] text-[14px] bg-[#FEE] p-[12px] border border-[#BD3322]">
          {error}
        </div>
      )}

      <div className="col-span-1 flex flex-col gap-[8px]">
        <label className="text-[#141511] font-semibold">First name</label>
        <input
          type="text"
          name="firstname"
          className={`h-[48px] border border-[#D6D6D5] p-[12px] w-full ${isEditing ? 'bg-white text-[#141511]' : 'bg-[#F3F3F3] text-[#676764]'} outline-none`}
          placeholder="First name"
          value={formData.firstname}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>

      <div className="col-span-1 flex flex-col gap-[8px]">
        <label className="text-[#141511] font-semibold">Last name</label>
        <input
          type="text"
          name="lastname"
          className={`h-[48px] border border-[#D6D6D5] p-[12px] w-full ${isEditing ? 'bg-white text-[#141511]' : 'bg-[#F3F3F3] text-[#676764]'} outline-none`}
          placeholder="Last name"
          value={formData.lastname}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>

      <div className="col-span-1 flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <label className="text-[#141511] font-semibold">Email</label>
          {!isEditing && (
            <button
              onClick={() => setShowEmailChange(true)}
              className="text-[#141511] text-[14px] font-medium hover:underline"
            >
              Change Email
            </button>
          )}
        </div>
        <input
          type="email"
          name="email"
          className={`h-[48px] border border-[#D6D6D5] p-[12px] w-full ${isEditing ? 'bg-white text-[#141511]' : 'bg-[#F3F3F3] text-[#676764]'} outline-none`}
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>

      <div className="col-span-1 flex flex-col gap-[8px]">
        <label className="text-[#141511] font-semibold">Phone</label>
        <input
          type="text"
          name="phone"
          className={`h-[48px] border border-[#D6D6D5] p-[12px] w-full ${isEditing ? 'bg-white text-[#141511]' : 'bg-[#F3F3F3] text-[#676764]'} outline-none`}
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>

      {!isEditing && (
        <div className="flex flex-col gap-[8px]">
          <button
            onClick={() => setShowPasswordChange(true)}
            className="h-[48px] text-[#141511] font-semibold flex items-center justify-center border border-[#D6D6D5] hover:bg-[#F3F3F3] transition-colors cursor-pointer"
          >
            CHANGE PASSWORD
          </button>
        </div>
      )}

      {/* Password Change Modal */}
      {showPasswordChange && (
        <div className="fixed inset-0 bg-[#1415114D] z-50 flex items-center justify-center p-[20px]">
          <div className="bg-white border border-[#D6D6D5] p-[24px] max-w-[500px] w-full flex flex-col gap-[20px]">
            <div className="text-[#141511] font-medium text-[24px]">Change Password</div>
            
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#141511] font-semibold">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-white text-[#141511] outline-none"
                placeholder="Enter current password"
                value={passwordData.currentPassword}
                onChange={handlePasswordInputChange}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[#141511] font-semibold">New Password</label>
              <input
                type="password"
                name="newPassword"
                className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-white text-[#141511] outline-none"
                placeholder="Enter new password (min 6 characters)"
                value={passwordData.newPassword}
                onChange={handlePasswordInputChange}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[#141511] font-semibold">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-white text-[#141511] outline-none"
                placeholder="Confirm new password"
                value={passwordData.confirmPassword}
                onChange={handlePasswordInputChange}
              />
            </div>

            <div className="flex gap-[8px] justify-end">
              <button
                onClick={() => {
                  setShowPasswordChange(false);
                  setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
                  setError("");
                }}
                className="h-[40px] px-[16px] text-[#141511] font-semibold border border-[#D6D6D5] cursor-pointer flex items-center justify-center hover:bg-[#F3F3F3] transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={handleChangePassword}
                disabled={loading}
                className="h-[40px] px-[16px] text-white font-semibold bg-[#141511] cursor-pointer flex items-center justify-center hover:bg-[#2a2a28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "CHANGING..." : "CHANGE PASSWORD"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Change Modal */}
      {showEmailChange && (
        <div className="fixed inset-0 bg-[#1415114D] z-50 flex items-center justify-center p-[20px]">
          <div className="bg-white border border-[#D6D6D5] p-[24px] max-w-[500px] w-full flex flex-col gap-[20px]">
            <div className="text-[#141511] font-medium text-[24px]">Change Email</div>
            <div className="text-[#676764] text-[14px]">
              To change your email, please enter your new email address and confirm with your current password.
            </div>
            
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#141511] font-semibold">New Email</label>
              <input
                type="email"
                name="newEmail"
                className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-white text-[#141511] outline-none"
                placeholder="Enter new email address"
                value={emailChangeData.newEmail}
                onChange={handleEmailChangeInputChange}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[#141511] font-semibold">Current Password</label>
              <input
                type="password"
                name="password"
                className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-white text-[#141511] outline-none"
                placeholder="Enter your current password"
                value={emailChangeData.password}
                onChange={handleEmailChangeInputChange}
              />
            </div>

            <div className="flex gap-[8px] justify-end">
              <button
                onClick={() => {
                  setShowEmailChange(false);
                  setEmailChangeData({ newEmail: "", password: "" });
                  setError("");
                }}
                className="h-[40px] px-[16px] text-[#141511] font-semibold border border-[#D6D6D5] cursor-pointer flex items-center justify-center hover:bg-[#F3F3F3] transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={handleChangeEmail}
                disabled={loading}
                className="h-[40px] px-[16px] text-white font-semibold bg-[#141511] cursor-pointer flex items-center justify-center hover:bg-[#2a2a28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "CHANGING..." : "CHANGE EMAIL"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
