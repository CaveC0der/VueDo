-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(36) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "password" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "user_id" VARCHAR(36) NOT NULL,
    "value" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "todo_lists" (
    "id" VARCHAR(36) NOT NULL,
    "user_id" VARCHAR(36) NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(300),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todo_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo_items" (
    "id" VARCHAR(36) NOT NULL,
    "todo_list_id" VARCHAR(36) NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(300),
    "priority" SMALLINT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todo_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo_lists" ADD CONSTRAINT "todo_lists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo_items" ADD CONSTRAINT "todo_items_todo_list_id_fkey" FOREIGN KEY ("todo_list_id") REFERENCES "todo_lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
