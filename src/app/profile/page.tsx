"use client";

import ConfigurationIcon from "@/assets/profile/configuration.svg";
import ProfileEditIcon from "@/assets/profile/profile_edit.svg";
import ShareIcon from "@/assets/profile/share.svg";
import useGetUser from "@/hooks/user/auth/use-get-user-profile";
import useUpdateNickname from "@/hooks/user/profile/use-update-nickname";
import { useState } from "react";

export default function ProfilePage() {
  // 기존 useGetUser 훅 사용
  const { data, isLoading, error } = useGetUser();
  const updateNicknameMutation = useUpdateNickname();

  // 모달 상태 관리
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    nickname: "",
    profileImage: null as File | null,
    previewImage: "" as string,
  });

  // 모달 열기
  const openEditModal = () => {
    setEditData({
      nickname: data?.nickname || "",
      profileImage: null,
      previewImage: data?.profileImage || "",
    });
    setIsEditModalOpen(true);
  };

  // 모달 닫기
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditData({
      nickname: "",
      profileImage: null,
      previewImage: "",
    });
  };

  // 프로필 이미지 변경 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setEditData((prev) => ({
        ...prev,
        profileImage: file,
        previewImage: URL.createObjectURL(file),
      }));
    }
  };

  // 프로필 저장 핸들러
  const handleSaveProfile = () => {
    // 닉네임이 변경되었을 때만 API 호출
    if (editData.nickname !== data?.nickname && editData.nickname.trim()) {
      updateNicknameMutation.mutate(editData.nickname, {
        onSuccess: () => {
          console.log("프로필 업데이트 성공");
          closeEditModal();
        },
        onError: (error) => {
          console.error("프로필 업데이트 실패:", error);
          alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
        },
      });
    } else {
      closeEditModal();
    }
  };

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <div className="-ml-64 min-h-screen w-screen bg-coolGray-50 lg:-ml-140">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-lg text-gray-600">프로필을 불러오는 중...</div>
        </div>
      </div>
    );
  }

  // 에러 상태 처리
  if (error) {
    return (
      <div className="-ml-64 min-h-screen w-screen bg-coolGray-50 lg:-ml-140">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-lg text-red-600">
              프로필 정보를 불러오는데 실패했습니다.
            </div>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              다시 시도
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 데이터가 없는 경우 처리
  if (!data) {
    return (
      <div className="-ml-64 min-h-screen w-screen bg-coolGray-50 lg:-ml-140">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-lg text-gray-600">
            사용자 정보를 찾을 수 없습니다.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="-ml-64 min-h-screen w-screen bg-coolGray-50 lg:-ml-140">
      <div className="relative">
        {/* Blue Header Background - 264px height */}
        <div className="ml-100 mr-36 h-[264px] rounded-b-[20px] bg-blue-50 lg:ml-176"></div>

        {/* Profile Image */}
        <div className="-mt-[95px] ml-200 lg:ml-278">
          <div className="flex h-[191px] w-[191px] items-center justify-center rounded-full bg-coolGray-50">
            {data?.profileImage ? (
              <img
                src={data.profileImage}
                alt={`${data?.nickname || "사용자"}의 프로필`}
                className="h-[171px] w-[171px] rounded-full object-cover"
                onError={(e) => {
                  // 이미지 로드 실패 시 기본 배경으로 대체
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.nextElementSibling?.classList.remove("hidden");
                }}
              />
            ) : null}
            <div
              className={`h-[171px] w-[171px] rounded-full bg-gray-300 ${
                data?.profileImage ? "hidden" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative ml-[200px] mt-[30px] lg:ml-[278px]">
        <div className="w-full">
          {/* Profile Info */}
          <div className="relative">
            {/* 왼쪽: 이름, 이메일, 버튼 */}
            <div className="space-y-4">
              {/* Name and Handle */}
              <div>
                <h1
                  className="font-bold leading-[34px] text-gray-900"
                  style={{ height: "34px" }}
                >
                  {data?.nickname || "사용자"}
                </h1>
                <p
                  className="leading-[30px] text-gray-500"
                  style={{ height: "30px" }}
                >
                  @{data?.nickname || "사용자"}
                </p>
                <div className="mt-56 text-gray-500">
                  {/* SVG 아이콘 버튼들 */}
                  <div
                    className="mt-2 flex justify-between"
                    style={{ width: "354px", height: "42px" }}
                  >
                    <button
                      className="flex items-center justify-center gap-2 rounded-full border border-blue-300 bg-white text-blue-600 transition-colors hover:bg-blue-50"
                      style={{ width: "146px", height: "42px" }}
                      title="프로필 편집"
                      onClick={openEditModal}
                    >
                      <ProfileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        프로필 수정하기
                      </span>
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50"
                      style={{ width: "86px", height: "42px" }}
                      title="설정"
                      onClick={() => {
                        console.log("설정");
                      }}
                    >
                      <ConfigurationIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">설정</span>
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50"
                      style={{ width: "88px", height: "42px" }}
                      title="공유"
                      onClick={() => {
                        console.log("공유");
                      }}
                    >
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">공유</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">{/* 버튼들은 그대로 유지 */}</div>
            </div>

            {/* 통계 정보 (크레딧, 포스팅, 좋아요, 뷰) */}
            <div className="absolute left-[490px] top-0 flex flex-col gap-15 lg:left-[412px]">
              {/* 크레딧 */}
              <div className="flex items-center gap-20">
                <div className="w-[55px] text-sm text-gray-500">크레딧</div>
                <div className="text-lg font-semibold text-gray-900">
                  {data?.credit || 0}/000
                </div>
              </div>

              {/* 포스팅 */}
              <div className="flex items-center gap-20">
                <div className="w-[55px] text-sm text-gray-500">포스팅</div>
                <div className="text-lg font-semibold text-gray-900">0</div>
              </div>

              {/* 좋아요 */}
              <div className="flex items-center gap-20">
                <div className="w-[55px] text-sm text-gray-500">좋아요</div>
                <div className="text-lg font-semibold text-gray-900">0</div>
              </div>

              {/* 뷰 */}
              <div className="flex items-center gap-20">
                <div className="w-[55px] text-sm text-gray-500">뷰</div>
                <div className="text-lg font-semibold text-gray-900">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로필 편집 모달 */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 배경 오버레이 */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeEditModal}
          />

          {/* 모달 컨텐츠 */}
          <div className="relative w-[500px] max-w-[90vw] rounded-2xl bg-white p-8 shadow-2xl">
            {/* 모달 헤더 */}
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                프로필 편집하기
              </h2>
              <button
                onClick={closeEditModal}
                className="text-2xl font-light text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* 프로필 이미지 영역 */}
            <div className="mb-8 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="h-[120px] w-[120px] overflow-hidden rounded-full bg-gray-200">
                  {editData.previewImage ? (
                    <img
                      src={editData.previewImage}
                      alt="프로필 미리보기"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-300">
                      <span className="text-sm text-gray-500">사진</span>
                    </div>
                  )}
                </div>

                {/* 카메라 아이콘 버튼 */}
                <label
                  htmlFor="profileImageInput"
                  className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-500 hover:bg-gray-600"
                >
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </label>

                <input
                  id="profileImageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* 이름 입력 영역 */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                이름
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={editData.nickname}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      nickname: e.target.value,
                    }))
                  }
                  placeholder="구글 원더이름"
                  className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={22}
                />
                <span className="absolute right-3 top-3 text-sm text-gray-400">
                  {editData.nickname.length}/22
                </span>
              </div>
            </div>

            {/* 저장 버튼 */}
            <div className="flex justify-end">
              <button
                onClick={handleSaveProfile}
                disabled={updateNicknameMutation.isPending}
                className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {updateNicknameMutation.isPending ? "저장 중..." : "저장하기"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
